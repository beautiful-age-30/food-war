import { Router } from "express";
import { TEST_ENDPOINT } from "../../constants/endpoint";
import { test } from "./test.service";

export const router: Router = Router();

// getRoutes
router.get(TEST_ENDPOINT + "/", (req, res) => {
  const data = test();
  res.status(200).send({
    status: "0000",
    error: null,
    data,
  });
});
