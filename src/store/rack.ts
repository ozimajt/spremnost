import { create } from 'zustand';

interface ModuleState {
  powered: boolean;
  showSettings: boolean;
}

interface RackStore {
  modules: Record<string, ModuleState>;
  activeModule: string | null;
  togglePower: (id: string) => void;
  toggleSettings: (id: string) => void;
  setActiveModule: (id: string | null) => void;
}

const defaultModules: Record<string, ModuleState> = {
  kondukter: { powered: true, showSettings: false },
  chronometer: { powered: true, showSettings: false },
  inventory: { powered: true, showSettings: false },
  readiness: { powered: true, showSettings: false },
  operator: { powered: true, showSettings: false },
  feed: { powered: true, showSettings: false },
  map: { powered: true, showSettings: false },
};

export const useRackStore = create<RackStore>((set) => ({
  modules: defaultModules,
  activeModule: null,
  togglePower: (id) =>
    set((state) => ({
      modules: {
        ...state.modules,
        [id]: { ...state.modules[id], powered: !state.modules[id].powered },
      },
    })),
  toggleSettings: (id) =>
    set((state) => ({
      modules: {
        ...state.modules,
        [id]: { ...state.modules[id], showSettings: !state.modules[id].showSettings },
      },
    })),
  setActiveModule: (id) => set({ activeModule: id }),
}));
