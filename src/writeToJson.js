const fs = require("fs")
const products = [];

for (let i = 0; i < 2000; i++) {
    products.push(
        {
            "productId": "0ef51bc7-7f27-4bc1-985b-cb941f0cc8e7",
            "productName": `Product ${i} `,
            "highlightedProductName": "Odysea Organic Sheep and Goats __highlight__Milk__highlight__ Feta",
            "originalProductName": `Product ${i} `,
            "imageUrl": "https://ocado.rte.ocadoretail.osp.world/images-v3/4c902091-1" +
                "958-42f7-97e5-3306cd9df0aa/2bb17cf8-4915-407f-bd1f-3d73412101e2/100x100.jpg",
            "categoryPaths": [
                "/ Fresh & Chilled Food / Dairy & Eggs / Cheese / Feta, Halloumi & Paneer / Feta /",
                "/ Dietary, Lifestyle & World Foods / Organic / Milk, Eggs & Dairy / Cheese /"
            ],
            "highlightedCategoryPaths": [
                "/ Dietary, Lifestyle & World Foods / Organic / __highlight__Milk__highlight__, Eggs & Dairy / Cheese /"
            ],
            "categoryIdPaths": [
                "/ 84aa76a3-bd8d-4243-83d6-7fd78183a05d / 3b8ac04d-fb49-4a88-b75f-33d424726402 / 640e" +
                "2d50-e4c7-46ad-8d75-dc180a8ce86e / e9c6a84b-4479-480a-a6d7-f1d1e97d0cfb / f67d43d7-fe42-4162-9f53-1008d13f7802 /",
                "/ 89442b02-9f6c-43f1-b793-b93a91d77a42 / ae2365fd-4325-400b-822f-f2740a2559bc / 076b3" +
                "3d3-e7fc-4a1b-ad30-50e449707559 / cef8bbdd-a99a-4e1b-bc39-34d1813d1e4d /"
            ],
            "retailerProductId": "24627011",
            "salesVelocity": "2000",
            "conversion": "0",
            "rankingScore": "0.187381",
            "marginPercentage": "0.7495238095238095",
            "cashMargin": "0.0",
            "smartShopScore": "0.0",
            "affinityScore": "0.0",
            "matchingScore": "4.273187",
            "productNameMatch": true,
            "categoryMatch": true,
            "categoryTextMatch": false,
            "queryMatch": true,
            "matchingSynonyms": [],
            "new": false,
            "vectorSearchResult": false,
            "keywordSearchResult": true,
            "favorite": false,
            "promoted": false
        }
    );
}

fs.writeFileSync("products.json", JSON.stringify(products), "utf-8");

