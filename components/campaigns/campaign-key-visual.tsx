"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, Upload, Wand2, Video, Image as ImageIcon, Check } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function CampaignKeyVisual() {
  const [uploadType, setUploadType] = useState<"image" | "video">("image");
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoFrames, setVideoFrames] = useState<string[]>([]);
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const [isFrameExtractionOpen, setIsFrameExtractionOpen] = useState(false);
  const [isVideoProcessing, setIsVideoProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (uploadType === "video" && file.type.startsWith("video/")) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
      setIsFrameExtractionOpen(true);
      extractFramesFromVideo(videoUrl);
    } else if (uploadType === "image" && file.type.startsWith("image/")) {
      // Handle image upload
    }
  };

  const extractFramesFromVideo = (videoUrl: string) => {
    setIsVideoProcessing(true);
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    
    const frames: string[] = [];
    
    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      
      if (!context) {
        setIsVideoProcessing(false);
        return;
      }
      
      const duration = video.duration;
      const frameCount = Math.min(12, Math.floor(duration * 2)); // Extract up to 12 frames, 2 per second
      const interval = duration / frameCount;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      let currentTime = 0;
      
      const captureFrame = () => {
        if (currentTime <= duration) {
          video.currentTime = currentTime;
          
          video.addEventListener("seeked", () => {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const frameDataUrl = canvas.toDataURL("image/jpeg");
            frames.push(frameDataUrl);
            
            currentTime += interval;
            
            if (currentTime <= duration && frames.length < frameCount) {
              captureFrame();
            } else {
              setVideoFrames(frames);
              setIsVideoProcessing(false);
              if (frames.length > 0) {
                setSelectedFrame(frames[0]);
              }
            }
          }, { once: true });
        }
      };
      
      captureFrame();
    });
  };

  const selectFrame = (frame: string) => {
    setSelectedFrame(frame);
  };

  const confirmFrameSelection = () => {
    setIsFrameExtractionOpen(false);
    // Here you would typically save the selected frame to your campaign data
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Key Visual</CardTitle>
          <CardDescription>
            Upload an existing key visual or generate one with AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="generate" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generate">Generate with AI</TabsTrigger>
              <TabsTrigger value="upload">Upload Existing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Creative Brief</Label>
                <Textarea 
                  id="prompt" 
                  placeholder="Describe the visual you want to create in detail..."
                  rows={4}
                />
                <p className="text-xs text-muted-foreground">
                  Be specific about style, mood, colors, composition, and key elements to include.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reference">Reference Image URL (optional)</Label>
                <Input id="reference" placeholder="https://..." />
                <p className="text-xs text-muted-foreground">
                  Provide a URL to an image that can serve as inspiration or reference.
                </p>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="style">Visual Style</Label>
                  <select 
                    id="style" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select style...</option>
                    <option value="corporate">Corporate & Professional</option>
                    <option value="minimalist">Clean & Minimalist</option>
                    <option value="bold">Bold & Vibrant</option>
                    <option value="technical">Technical & Detailed</option>
                    <option value="lifestyle">Lifestyle & Human-centered</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="focus">Visual Focus</Label>
                  <select 
                    id="focus" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select focus...</option>
                    <option value="product">Product-centered</option>
                    <option value="people">People & Interactions</option>
                    <option value="abstract">Abstract Concept</option>
                    <option value="data">Data Visualization</option>
                    <option value="environment">Environmental Context</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full">
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Key Visual
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 mt-4">
                <h3 className="font-medium mb-2">AI Generation Tips</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Be specific about colors, style, and composition</li>
                  <li>• Mention if you want people, products, or abstract elements</li>
                  <li>• Specify the mood and emotion you want to convey</li>
                  <li>• Include any brand elements that must be featured</li>
                  <li>• Describe the target audience and context</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="upload">
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button 
                    variant={uploadType === "image" ? "default" : "outline"} 
                    onClick={() => setUploadType("image")}
                    className="flex-1"
                  >
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Image
                  </Button>
                  <Button 
                    variant={uploadType === "video" ? "default" : "outline"} 
                    onClick={() => setUploadType("video")}
                    className="flex-1"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Video
                  </Button>
                </div>
                
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <div className="mx-auto flex flex-col items-center justify-center space-y-4">
                    <div className="rounded-full bg-background p-3">
                      {uploadType === "image" ? (
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      ) : (
                        <Video className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        {uploadType === "image" ? "Upload Key Visual" : "Upload Video"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {uploadType === "image" 
                          ? "Drag and drop or click to upload your key visual image" 
                          : "Upload a video to extract still frames for your key visual"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {uploadType === "image" 
                          ? "Supported formats: PNG, JPG, WEBP (max 10MB)" 
                          : "Supported formats: MP4, MOV, WEBM (max 100MB)"}
                      </p>
                    </div>
                    <label htmlFor="file-upload">
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept={uploadType === "image" ? "image/*" : "video/*"}
                        onChange={handleFileChange}
                      />
                      <Button as="span">Select File</Button>
                    </label>
                  </div>
                </div>
                
                {selectedFrame && (
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">Selected Frame</h3>
                    <div className="border rounded-md overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image 
                          src={selectedFrame} 
                          alt="Selected video frame"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Recent Uploads</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-md overflow-hidden">
                      <div className="relative h-32 w-full">
                        <Image 
                          src="https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="Recent upload 1"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-xs truncate">product-hero-v1.jpg</p>
                      </div>
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      <div className="relative h-32 w-full">
                        <Image 
                          src="https://images.pexels.com/photos/5912598/pexels-photo-5912598.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="Recent upload 2"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-xs truncate">team-photo-q2.jpg</p>
                      </div>
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      <div className="relative h-32 w-full">
                        <Image 
                          src="https://images.pexels.com/photos/5912599/pexels-photo-5912599.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="Recent upload 3"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-xs truncate">product-lineup.jpg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Back</Button>
          <Button>
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isFrameExtractionOpen} onOpenChange={setIsFrameExtractionOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Extract Frame from Video</DialogTitle>
            <DialogDescription>
              Select a frame from your video to use as the key visual
            </DialogDescription>
          </DialogHeader>
          
          {isVideoProcessing ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
              <p className="text-sm text-muted-foreground">Processing video and extracting frames...</p>
            </div>
          ) : (
            <>
              {videoSrc && (
                <div className="mb-4">
                  <video 
                    src={videoSrc} 
                    controls 
                    className="w-full rounded-md"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
              )}
              
              <div className="grid grid-cols-4 gap-2">
                {videoFrames.map((frame, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "relative border rounded-md overflow-hidden cursor-pointer transition-all",
                      selectedFrame === frame ? "ring-2 ring-primary" : "hover:opacity-90"
                    )}
                    onClick={() => selectFrame(frame)}
                  >
                    <div className="relative h-24 w-full">
                      <Image 
                        src={frame} 
                        alt={`Frame ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {selectedFrame === frame && (
                      <div className="absolute top-1 right-1 bg-primary rounded-full p-0.5">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsFrameExtractionOpen(false)}>Cancel</Button>
            <Button onClick={confirmFrameSelection} disabled={!selectedFrame || isVideoProcessing}>
              Use Selected Frame
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
