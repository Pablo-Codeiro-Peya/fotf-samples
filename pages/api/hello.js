// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {withSentry} from "@sentry/nextjs";

const DELAY_BACKEND = 800;
const DELAY_ROUNDTRIP = 100;

export default withSentry(function handler(req, res) {
  return new Promise((resolve) => {
    setTimeout(() => {
      res.status(200).json({ name: 'John Doe' + new Date().toISOString() });
      resolve();
    }, DELAY_BACKEND + DELAY_ROUNDTRIP)
  });
});
