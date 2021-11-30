import { ParsedRequest } from "./types";

export function getHtml(parsedReq: ParsedRequest) {
  const { text } = parsedReq;
  return `<!DOCTYPE html>
<html>
	<meta charset="utf-8">
  <title>Generated Image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style> ${styles} </style>
  <body>
  	<div class="bg_pt">
    	<h1 class="ogp_title">${text}</h1>
			<div class="ogp_profile">
				<h2>yamakenji blog</h2>
			</div>
    </div>
	</body>
</html>`;
}

const styles = `
  html, body {
    padding: 0;
    margin: 0;
    height: 100vh;
  }
  .bg_pt {
    border: 30px solid #43C6AC;
    border-image: linear-gradient(to right, #2af598, #009efd) 1 100%;
    border-image-slice: 1;
    padding: 20px; /* 内側の余白 */
    height: 92%;
		display: flex;
		word-break: break-all;
  }
  .ogp_title {
		position: absolute;
		top: 20%;
    font-size: 5em;
    font-weight: bold;
		padding: 40px;
  }
  .ogp_profile {
    position: absolute;
		font-size: 2em;
    bottom: 20px; 
  }
`;
