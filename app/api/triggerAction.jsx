import { Store } from "@reduxjs/toolkit";

export default function handler(req, res) {
    const { action } = req.body;
    store.dispatch(action);
    const state = store.getState();
    res.json({ state });
  }