import { PROJECTS } from "../data/projects";
import { ENTITIES } from "../data/entities";
import type { Project } from "../types";

export interface EntityStat {
  key: string;
  name: string;
  type: "client" | "authority" | "partner";
  count: number;
}

export const getEntityProjectStats = (): EntityStat[] => {
  const stats: Record<string, number> = {};

  // init all entities with 0
  ENTITIES.forEach(e => {
    stats[e.key] = 0;
  });

  PROJECTS.forEach((p: Project) => {
    // client / authority
    if (stats[p.entityKey] !== undefined) {
      stats[p.entityKey]++;
    }

    // partner (optional)
    if (p.partnerKey && stats[p.partnerKey] !== undefined) {
      stats[p.partnerKey]++;
    }
  });

  return ENTITIES.map(e => ({
    key: e.key,
    name: e.name,
    type: e.type,
    count: stats[e.key] || 0,
  }));
};
