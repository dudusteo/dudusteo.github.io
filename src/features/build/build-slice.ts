import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuildState {
	name: string;
	artifact: Artifact | null;
}

const initialState: BuildState = {
	name: "Abigail",
	artifact: null,
};

const buildSlice = createSlice({
	name: "build",
	initialState,
	reducers: {
		changeHeroName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		changeArtifact: (state, action: PayloadAction<Artifact | null>) => {
			state.artifact = action.payload;
		},
	},
});

export const { changeHeroName, changeArtifact } = buildSlice.actions;
export default buildSlice.reducer;
