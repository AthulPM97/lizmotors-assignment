export const storedNodes = [
  {
    id: "1",
    text: "Idea",
  },
  {
    id: "1-1",
    text: "Research",
    data: "This is the research phase"
  },
  {
    id: "1-2",
    text: "planning",
    data: "The planning phase where things are planned"
  },
  {
    id: "1-3",
    text: "designing",
    data: "summoning the best designers"
  },
  {
    id: "1-4",
    text: "manufacturing",
    data: "beginning the manufacture process"
  },
  {
    id: "1-5",
    text: "Sales/Marketing",
    data: "Selling our stuff to people"
  },
  {
    id: "1-1-1",
    text: "External",
    data: "Doing external research"
  },
  {
    id: "1-1-2",
    text: "Internal",
    data: "Doing internal research"
  },
  { id: "1-2-1", text: "PRD", data: "Production planning" },
  { id: "1-2-2", text: "Specs", data: "Specs planning" },
  { id: "1-3-1", text: "Hardware", data: "Hardware design" },
  { id: "1-3-2", text: "Software", data: "software design" },
  { id: "1-4-1", text: "Material", data: "Material manufacturing" },
  { id: "1-4-2", text: "Production", data: "production level manufacture" },
  { id: "1-5-1", text: "Online", data: "online marketing" },
  { id: "1-5-2", text: "Dealership", data: "dealership marketing" },
  { id: "1-1-1-1", text: "B2C", data: "business to customer" },
  { id: "1-1-1-2", text: "B2C", data: "business to customer" },
];

export const storedEdges = [
  {
    id: "1-1",
    from: "1",
    to: "1-1",
  },
  {
    id: "1-2",
    from: "1",
    to: "1-2",
  },
  {
    id: "1-3",
    from: "1",
    to: "1-3",
  },
  {
    id: "1-4",
    from: "1",
    to: "1-4",
  },
  {
    id: "1-5",
    from: "1",
    to: "1-5",
  },
  {
    id: "1-1-1",
    from: "1-1",
    to: "1-1-1",
  },
  {
    id: "1-1-2",
    from: "1-1",
    to: "1-1-2",
  },
  { id: "1-2-1", from: "1-2", to: "1-2-1" },
  { id: "1-2-2", from: "1-2", to: "1-2-2" },
  { id: "1-3-1", from: "1-3", to: "1-3-1" },
  { id: "1-3-2", from: "1-3", to: "1-3-2" },
  { id: "1-4-1", from: "1-4", to: "1-4-1" },
  { id: "1-4-2", from: "1-4", to: "1-4-2" },
  { id: "1-5-1", from: "1-5", to: "1-5-1" },
  { id: "1-5-2", from: "1-5", to: "1-5-2" },
  {id: "1-1-1-1", from: "1-1-1", to: '1-1-1-1'},
  {id: "1-1-1-2", from: "1-1-1", to: '1-1-1-2'}
];
