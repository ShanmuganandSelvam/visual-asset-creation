export async function generateStaticParams() {
  // Define the campaign IDs that will be pre-rendered at build time
  return [
    { id: 'camp-001' },
    { id: 'camp-002' },
    { id: 'camp-003' }
  ];
}
