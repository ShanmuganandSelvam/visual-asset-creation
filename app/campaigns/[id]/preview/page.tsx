import CampaignPreviewClient from "./preview-client";
import { generateStaticParams } from "../generateStaticParams";

export { generateStaticParams };

export default function CampaignPreviewPage({ params }: { params: { id: string } }) {
  return <CampaignPreviewClient params={params} />;
}
