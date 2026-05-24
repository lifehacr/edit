/**
 * Vercel Serverless Function entry.
 *
 * We import the built Nitro Node server handler from the build output and
 * forward the incoming request/response to it.
 */

import handler from '../.output/server/index.mjs'

export default handler
