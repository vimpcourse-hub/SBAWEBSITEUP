
export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'Joint Venture' | 'Strategic Partner' | 'Technology Associate';
}

export const PARTNERS: Partner[] = [
  {
    id: 'p1',
    name: 'NSL Company',
    logo: 'https://picsum.photos/id/10/200/100',
    type: 'Joint Venture'
  },
  {
    id: 'p2',
    name: 'Shashank Constructions',
    logo: 'https://picsum.photos/id/20/200/100',
    type: 'Joint Venture'
  },
  {
    id: 'p3',
    name: 'TATA Steel (Authorized)',
    logo: 'https://picsum.photos/id/30/200/100',
    type: 'Strategic Partner'
  },
  {
    id: 'p4',
    name: 'UltraTech Cement',
    logo: 'https://picsum.photos/id/40/200/100',
    type: 'Technology Associate'
  },
  {
    id: 'p5',
    name: 'JSW Steel',
    logo: 'https://picsum.photos/id/50/200/100',
    type: 'Strategic Partner'
  }
];
