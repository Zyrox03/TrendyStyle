import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the thunk to fetch products
const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Make an HTTP request to your server API to get the products
    const response = await axios.get(`${import.meta.env.VITE_TOP_SHOE_DZ_BASE_API}/products`);

    const { products, specialOffer , stars} = response.data;
    return { products, specialOffer, stars };
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    specialOffer: null,
    stars: 0
  },
  reducers: {
    // Additional actions for handling products can be defined here

    updateProducts: (state, action) => {
      state.items = action.payload;
    },
    setSpecialOffer: (state, action) => {
      state.specialOffer = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setStarCounter: (state, action) => {
      state.stars = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Update the state with the fetched products
      const { products, specialOffer, stars } = action.payload;

      state.items = products;
      state.specialOffer = specialOffer;
      state.stars = stars;
    });
  },
});

// Export any additional actions if needed
export { fetchProducts };
export const { updateProducts, setSpecialOffer, setLoading , setStarCounter} =
  productsSlice.actions;
export default productsSlice.reducer;
