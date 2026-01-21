// src/utils/entityStats.ts

import { PROJECTS } from "../data/projects";
import { ENTITIES } from "../data/entities";
import type { Project, EntityItem } from "../types";

export interface EntityStat {
  key: string;
  name: string;
  type: "client" | "authority" | "partner";
  count: number;
}

/**
 * Returns how many projects are linked to each entity
 * (client / authority / partner)
 */
export const getEntityProjectStats = (): EntityStat[] => {
  const stats: Record<string, number> = {};

  // initialize all entities with 0
  ENTITIES.forEach((e: EntityItem) => {
    stats[e.key] = 0;
  });

  // count projects by entityKey + partnerKey
  PROJECTS.forEach((p: Project) => {
    if (stats[p.entityKey] !== undefined) {
      stats[p.entityKey]++;
    }

    if (p.partnerKey && stats[p.partnerKey] !== undefined) {
      stats[p.partnerKey]++;
    }
  });

  // return combined list
  return ENTITIES.map((e: EntityItem) => ({
    key: e.key,
    name: e.name,
    type: e.type,
    count: stats[e.key] || 0,
  }));
};
