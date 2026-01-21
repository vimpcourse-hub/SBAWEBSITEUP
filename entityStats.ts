import { PROJECTS } from "../data/projects";
import { ENTITIES } from "../data/entities";

export interface EntityStat {
  key: string;
  name: string;
  type: "client" | "authority" | "partner";
  count: number;
}

export const getEntityProjectStats = (): EntityStat[] => {
  const stats: Record<string, number> = {};

  // init
  ENTITIES.forEach(e => {
    stats[e.key] = 0;
  });

  PROJECTS.forEach(p => {
    // client / authority
    if (stats[p.entityKey] !== undefined) {
      stats[p.entityKey]++;
    }

    // partner (optional)
    if ((p as any).partnerKey && stats[(p as any).partnerKey] !== undefined) {
      stats[(p as any).partnerKey]++;
    }
  });

  return ENTITIES.map(e => ({
    key: e.key,
    name: e.name,
    type: e.type,
    count: stats[e.key] || 0,
  }));
};
