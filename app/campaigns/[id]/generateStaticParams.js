export function generateStaticParams() {
  // This function generates the static paths for the campaign pages
  // For static export, we need to pre-render all possible campaign IDs
  return [
    { id: 'camp-001' },
    { id: 'camp-002' },
    { id: 'camp-003' },
    { id: 'camp-004' },
    { id: 'camp-005' },
  ];
}
