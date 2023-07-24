import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  // persist(
  (set) => ({
    beerRecipes: [],
    setBeerRecipes: (beerRecipes) =>
      set((state) => ({
        beerRecipes: [...state.beerRecipes, ...beerRecipes],
      })),
    /////////////////////
    responseBeer: [],
    setBeerResponse: (recipes) =>
      set(() => ({
        responseBeer: [...recipes],
      })),
    ///////////////////////////
    page: 1,
    incPage: () =>
      set((state) => ({
        page: state.page + 1,
      })),
    ///////////////////////////
    currentBeerName: "",
    setBeerName: (beerName) =>
      set((state) => ({
        currentBeerName: (state.beerName = beerName),
      })),
    //////////////////////////////////
    currentRecipe: null,
    setRecipe: () =>
      set((state) => ({
        currentRecipe: state.beerRecipes.find(
          (elem) => elem.name === state.currentBeerName
        ),
      })),
    setChecked: (index, checked) =>
      set((state) => {
        const newBeerRecipes = [...state.beerRecipes];
        if (index >= 0 && index < newBeerRecipes.length) {
          newBeerRecipes[index] = {
            ...newBeerRecipes[index],
            checked: checked,
          };
        }
        return { beerRecipes: newBeerRecipes };
      }),
  })
);
