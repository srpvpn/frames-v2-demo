import { METADATA } from "../../../lib/utils";

export async function GET() {
  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjI1MjEzNjAsInR5cGUiOiJhdXRoIiwia2V5IjoiMHgzQTA0MUM0RTdhMDk4NGNDMGYxMTZlMzhiRTI4Y0E4RTg4Njk1OTQzIn0",
      payload: "eyJkb21haW4iOiJmcmFtZXMtdjItZGVtby1ldGEudmVyY2VsLmFwcCJ9",
      signature:
        "zsP6oSBbVNzqELfyRkweSWZZ6KYFD9OR7bMPjCA4FwdAaAvUscOLLM0LAUoVw1cgYOyiooKRlXnqKPorld1ZwRw",
    },
      "frame": {
        "version": "1",
        "name": METADATA.name,
        "iconUrl": METADATA.iconImageUrl,
        "homeUrl": METADATA.homeUrl,
        "imageUrl": METADATA.bannerImageUrl,
        "webhookUrl": `${METADATA.homeUrl}/api/webhook`,
        "splashImageUrl": METADATA.iconImageUrl,
        "splashBackgroundColor": METADATA.splashBackgroundColor,
        "description": METADATA.description,
        "ogTitle": METADATA.name,
        "ogDescription": METADATA.description,
        "ogImageUrl": METADATA.bannerImageUrl,
        "primaryCategory": "developer-tools",
        "requiredCapabilities": [
          "actions.ready",
          "actions.signIn", 
          "actions.openMiniApp",
          "actions.addMiniApp",
          "actions.openUrl",
          "actions.sendToken",
          "actions.viewToken", 
          "actions.composeCast",
          "actions.viewProfile",
          "actions.swapToken",
          "actions.close",
          "actions.viewCast",
          "wallet.getEthereumProvider"
        ],
        "requiredChains": [
          "eip155:8453",
          "eip155:10"
        ],
        "noindex": false,
        "tags": ["base", "baseapp", "miniapp", "demo", "basepay"]
      }
  };

  return Response.json(config);
}
