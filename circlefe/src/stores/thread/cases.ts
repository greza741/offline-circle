import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { createThread, getDetailThread, getFeed } from "./async";
import { ThreadState } from "./slice";

export function cases(builder: ActionReducerMapBuilder<ThreadState>) {
  builder.addCase(getFeed.fulfilled, (state, action) => {
    state.threads = action.payload;
    state.loading = false;
  });
  builder.addCase(getFeed.pending, (state, action) => {
    console.log("pending", action);

    state.loading = true;
  });
  builder.addCase(getFeed.rejected, (state, action) => {
    console.log("rejected", action);

    state.loading = false;
  });

  builder.addCase(createThread.fulfilled, (state) => {
    state.loading = false;
  });
  builder.addCase(createThread.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(createThread.rejected, (state) => {
    state.loading = false;
  });
  builder.addCase(getDetailThread.fulfilled, (state, action) => {
    state.loading = false;
    state.thread = action.payload;
  });
  builder.addCase(getDetailThread.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(getDetailThread.rejected, (state) => {
    state.loading = false;
  });
}
