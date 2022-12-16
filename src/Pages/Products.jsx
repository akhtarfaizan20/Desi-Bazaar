import { Box } from "@chakra-ui/layout";
import React from "react";
import ProductContainer from "../Components/ProductsPageContent/ProductContainer";

let obj = {
  tshirts: [
    {
      image: "https://m.media-amazon.com/images/I/71sGfOZcpwL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA4NDk4OjowOjo&url=%2FJockey-2726-0105-BLACK-Black-T-Shirt-2726-0105-BLACK_Black_M%2Fdp%2FB00W05Z1L6%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      brand: "Jockey",
      details: "Men's Regular Fit V Neck Half Sleeved T-Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA4NDk4OjowOjo&url=%2FJockey-2726-0105-BLACK-Black-T-Shirt-2726-0105-BLACK_Black_M%2Fdp%2FB00W05Z1L6%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      ratings: "4.3 out of 5 stars",
      price: "470",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA4NDk4OjowOjo&url=%2FJockey-2726-0105-BLACK-Black-T-Shirt-2726-0105-BLACK_Black_M%2Fdp%2FB00W05Z1L6%2Fref%3Dsr_1_1_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/71DaKKQ93ZL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA3NTk4OjowOjo&url=%2FJockey-2714-0105-WHITE-White-T-Shirt-2714-0105-WHITE_White_M%2Fdp%2FB012STP7EO%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      brand: "Jockey",
      details: "Men's Regular Fit Round Neck Half Sleeved T-Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA3NTk4OjowOjo&url=%2FJockey-2714-0105-WHITE-White-T-Shirt-2714-0105-WHITE_White_M%2Fdp%2FB012STP7EO%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      ratings: "4.3 out of 5 stars",
    },
    {
      image: "https://m.media-amazon.com/images/I/71b1XEaNZ-L._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA2Njk4OjowOjo&url=%2FJockey-Regular-T-Shirt-2715_Navy-White_Medium%2Fdp%2FB01EUQJONS%2Fref%3Dsr_1_3_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      brand: "Jockey",
      details:
        "Men's Navy & Charcoal Melange Regular Fit T-Shirt (2715-01_Navy & Charcoal XL)",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA2Njk4OjowOjo&url=%2FJockey-Regular-T-Shirt-2715_Navy-White_Medium%2Fdp%2FB01EUQJONS%2Fref%3Dsr_1_3_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      ratings: "4.2 out of 5 stars",
      price: "559",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDQ2NjAxMDA2Njk4OjowOjo&url=%2FJockey-Regular-T-Shirt-2715_Navy-White_Medium%2Fdp%2FB01EUQJONS%2Fref%3Dsr_1_3_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/71BkK4MkLnL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDk3MTY0NzQyOTk4OjowOjo&url=%2FVan-Heusen-Athleisure-Regular-60033_Black_X-Large%2Fdp%2FB07R8VBMFX%2Fref%3Dsr_1_4_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      brand: "Van Heusen Athleisure",
      details:
        "Men Polo T-Shirt - Cotton Rich - Ultra Soft, Short Sleeve, Textured",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDk3MTY0NzQyOTk4OjowOjo&url=%2FVan-Heusen-Athleisure-Regular-60033_Black_X-Large%2Fdp%2FB07R8VBMFX%2Fref%3Dsr_1_4_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      ratings: "4.1 out of 5 stars",
      price: "733",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYXRmOjIwMDk3MTY0NzQyOTk4OjowOjo&url=%2FVan-Heusen-Athleisure-Regular-60033_Black_X-Large%2Fdp%2FB07R8VBMFX%2Fref%3Dsr_1_4_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Allen-Solly-Regular-Cotton-8907587727738_AMKP317G04251_Black_Medium/dp/B06Y2796H5/ref=sr_1_5?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-5",
      brand: "Allen Solly",
      details: "Men Polo",
      details_url:
        "https://www.amazon.in/Allen-Solly-Regular-Cotton-8907587727738_AMKP317G04251_Black_Medium/dp/B06Y2796H5/ref=sr_1_5?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-5",
      ratings: "4.1 out of 5 stars",
    },
    {
      image: "https://m.media-amazon.com/images/I/51eaOsDJA4L._AC_UL320_.jpg",
      url: "https://www.amazon.in/SEEME-Oversized-Round-Sleeve-T-Shirt/dp/B0BM53X7V4/ref=sr_1_omk_6?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-6",
      brand: "SEEME",
      details:
        "Men's Oversized Round Neck Half Sleeve Loose Fit T-Shirt for Men",
      details_url:
        "https://www.amazon.in/SEEME-Oversized-Round-Sleeve-T-Shirt/dp/B0BM53X7V4/ref=sr_1_omk_6?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-6",
      ratings: "5.0 out of 5 stars",
      price: "399",
      price_url:
        "https://www.amazon.in/SEEME-Oversized-Round-Sleeve-T-Shirt/dp/B0BM53X7V4/ref=sr_1_omk_6?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-6",
    },
    {
      image: "https://m.media-amazon.com/images/I/610FUjGAqBL._AC_UL320_.jpg",
      url: "https://www.amazon.in/JUARI-BE-GENTLEMAN-Regular-Printed/dp/B09S1BDFC2/ref=sr_1_7?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-7",
      brand: "JUARI BE A GENTLEMAN",
      details: "Men's Regular Fit Printed Full Sleeve T-Shirt",
      details_url:
        "https://www.amazon.in/JUARI-BE-GENTLEMAN-Regular-Printed/dp/B09S1BDFC2/ref=sr_1_7?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-7",
      ratings: "3.8 out of 5 stars",
      price: "489",
      price_url:
        "https://www.amazon.in/JUARI-BE-GENTLEMAN-Regular-Printed/dp/B09S1BDFC2/ref=sr_1_7?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-7",
    },
    {
      image: "https://m.media-amazon.com/images/I/71vp8Lec9JL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Scott-International-SS20-3RN-BU-GR-CH-L_Navy-Charcoal-Grey_Large/dp/B084L9DK9H/ref=sr_1_8?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-8",
      brand: "Scott International",
      details: "Men's Regular Fit T-Shirt (Pack of 3)",
      details_url:
        "https://www.amazon.in/Scott-International-SS20-3RN-BU-GR-CH-L_Navy-Charcoal-Grey_Large/dp/B084L9DK9H/ref=sr_1_8?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-8",
      ratings: "3.7 out of 5 stars",
      price: "474",
      price_url:
        "https://www.amazon.in/Scott-International-SS20-3RN-BU-GR-CH-L_Navy-Charcoal-Grey_Large/dp/B084L9DK9H/ref=sr_1_8?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-8",
    },
    {
      image: "https://m.media-amazon.com/images/I/818niea1luL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Van-Heusen-Solid-Regular-VSKP517S011409_White_Large/dp/B076CJHDGZ/ref=sr_1_9?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-9",
      brand: "Van Heusen",
      details: "Men's Regular Fit Polo Shirt",
      details_url:
        "https://www.amazon.in/Van-Heusen-Solid-Regular-VSKP517S011409_White_Large/dp/B076CJHDGZ/ref=sr_1_9?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-9",
      ratings: "4.0 out of 5 stars",
      price: "579",
      price_url:
        "https://www.amazon.in/Van-Heusen-Solid-Regular-VSKP517S011409_White_Large/dp/B076CJHDGZ/ref=sr_1_9?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-9",
    },
    {
      image: "https://m.media-amazon.com/images/I/41-r13-MCIL._AC_UL320_.jpg",
      url: "https://www.amazon.in/LEOTUDE-Regular-Cottonblend-T-Shirt-18_Navy-YLW_P_NavyBlue_XL/dp/B0BJ8Z1S9F/ref=sr_1_10?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-10",
      brand: "LEOTUDE",
      details: "Regular Fit Full Sleeve Cotton Blend Men's T-Shirt",
      details_url:
        "https://www.amazon.in/LEOTUDE-Regular-Cottonblend-T-Shirt-18_Navy-YLW_P_NavyBlue_XL/dp/B0BJ8Z1S9F/ref=sr_1_10?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-10",
      ratings: "3.4 out of 5 stars",
      price: "344",
      price_url:
        "https://www.amazon.in/LEOTUDE-Regular-Cottonblend-T-Shirt-18_Navy-YLW_P_NavyBlue_XL/dp/B0BJ8Z1S9F/ref=sr_1_10?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-10",
    },
    {
      image: "https://m.media-amazon.com/images/I/61bDoqhvEPL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Urbano-Fashion-Printed-T-Shirt-aopleaffull-drgreen-XL/dp/B08JQKHXGN/ref=sr_1_11?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-11",
      brand: "Urbano Fashion",
      details: "Men's Printed Full Sleeve Slim Fit Cotton T-Shirt",
      details_url:
        "https://www.amazon.in/Urbano-Fashion-Printed-T-Shirt-aopleaffull-drgreen-XL/dp/B08JQKHXGN/ref=sr_1_11?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-11",
      ratings: "3.7 out of 5 stars",
      price: "439",
      price_url:
        "https://www.amazon.in/Urbano-Fashion-Printed-T-Shirt-aopleaffull-drgreen-XL/dp/B08JQKHXGN/ref=sr_1_11?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-11",
    },
    {
      image: "https://m.media-amazon.com/images/I/71hTxMBuZ6L._AC_UL320_.jpg",
      url: "https://www.amazon.in/Jockey-2714-0105-BLACK-Black-T-Shirt-2714-0105_Black_Medium/dp/B012SSWGJO/ref=sr_1_12?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-12",
      brand: "Jockey",
      details: "Men's Regular Fit Round Neck Half Sleeved T-Shirt",
      details_url:
        "https://www.amazon.in/Jockey-2714-0105-BLACK-Black-T-Shirt-2714-0105_Black_Medium/dp/B012SSWGJO/ref=sr_1_12?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-12",
      ratings: "4.3 out of 5 stars",
    },
    {
      image: "https://m.media-amazon.com/images/I/51QeCqn2+9L._AC_UL320_.jpg",
      url: "https://www.amazon.in/BLIVE-Sleeve-T-Shirt-Printed-Medium/dp/B0B3RR5FHX/ref=sr_1_13?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-13",
      brand: "BLIVE",
      details: "Men's Round Neck Full Sleeve T-Shirt | Printed White T-Shirt",
      details_url:
        "https://www.amazon.in/BLIVE-Sleeve-T-Shirt-Printed-Medium/dp/B0B3RR5FHX/ref=sr_1_13?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-13",
      ratings: "3.0 out of 5 stars",
      price: "249",
      price_url:
        "https://www.amazon.in/BLIVE-Sleeve-T-Shirt-Printed-Medium/dp/B0B3RR5FHX/ref=sr_1_13?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-13",
    },
    {
      image: "https://m.media-amazon.com/images/I/71dTI9r18IL._AC_UL320_.jpg",
      url: "https://www.amazon.in/LEOTUDE-Regular-Sleeve-T-Shirt-Colored/dp/B09PBKS6M6/ref=sr_1_14?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-14",
      brand: "LEOTUDE",
      details: "Regular Fit Cottonblend Full Sleeve Printed Men's T-Shirt",
      details_url:
        "https://www.amazon.in/LEOTUDE-Regular-Sleeve-T-Shirt-Colored/dp/B09PBKS6M6/ref=sr_1_14?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-14",
      ratings: "3.6 out of 5 stars",
      price: "334",
      price_url:
        "https://www.amazon.in/LEOTUDE-Regular-Sleeve-T-Shirt-Colored/dp/B09PBKS6M6/ref=sr_1_14?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-14",
    },
    {
      image: "https://m.media-amazon.com/images/I/41C5x401H4L._AC_UL320_.jpg",
      url: "https://www.amazon.in/U-S-Polo-Assn-Regular-I633-001-PL_White_Large/dp/B0793NHJZJ/ref=sr_1_15?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-15",
      brand: "U.S. POLO ASSN.",
      details: "Men's Regular T-Shirt",
      details_url:
        "https://www.amazon.in/U-S-Polo-Assn-Regular-I633-001-PL_White_Large/dp/B0793NHJZJ/ref=sr_1_15?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-15",
      ratings: "3.8 out of 5 stars",
      price: "454",
      price_url:
        "https://www.amazon.in/U-S-Polo-Assn-Regular-I633-001-PL_White_Large/dp/B0793NHJZJ/ref=sr_1_15?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-15",
    },
    {
      image: "https://m.media-amazon.com/images/I/61f4mm1VlRL._AC_UL320_.jpg",
      url: "https://www.amazon.in/fanideaz-Cotton-Sleeve-Striped-Men_GY_M/dp/B0855D6BF2/ref=sr_1_16?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-16",
      brand: "fanideaz",
      details: "Mens Cotton Half Sleeve Striped Polo T Shirt with Collar",
      details_url:
        "https://www.amazon.in/fanideaz-Cotton-Sleeve-Striped-Men_GY_M/dp/B0855D6BF2/ref=sr_1_16?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-16",
      ratings: "3.6 out of 5 stars",
      price: "637",
      price_url:
        "https://www.amazon.in/fanideaz-Cotton-Sleeve-Striped-Men_GY_M/dp/B0855D6BF2/ref=sr_1_16?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-16",
    },
    {
      image: "https://m.media-amazon.com/images/I/81DBzxLgzjL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Max-Mens-Solid-Slim-AMPSP2001HSYGREEN_Green/dp/B08353RFB8/ref=sr_1_17?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-17",
      brand: "Max",
      details: "Solid Polo Slim Fit T-Shirt",
      details_url:
        "https://www.amazon.in/Max-Mens-Solid-Slim-AMPSP2001HSYGREEN_Green/dp/B08353RFB8/ref=sr_1_17?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-17",
      ratings: "4.0 out of 5 stars",
      price: "409",
      price_url:
        "https://www.amazon.in/Max-Mens-Solid-Slim-AMPSP2001HSYGREEN_Green/dp/B08353RFB8/ref=sr_1_17?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-17",
    },
    {
      image: "https://m.media-amazon.com/images/I/61CgZFL3nTS._AC_UL320_.jpg",
      url: "https://www.amazon.in/Van-Heusen-Athleisure-60021_Grey-Melange_Large/dp/B07RB1DGTB/ref=sr_1_18?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-18",
      brand: "Van Heusen Athleisure",
      details:
        "Men T-Shirt - Cotton Rich - Smart Tech, Easy Stain Release, Anti Stat, Ultra Soft, Quick Dry",
      details_url:
        "https://www.amazon.in/Van-Heusen-Athleisure-60021_Grey-Melange_Large/dp/B07RB1DGTB/ref=sr_1_18?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-18",
      ratings: "4.1 out of 5 stars",
      price: "478",
      price_url:
        "https://www.amazon.in/Van-Heusen-Athleisure-60021_Grey-Melange_Large/dp/B07RB1DGTB/ref=sr_1_18?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-18",
    },
    {
      image: "https://m.media-amazon.com/images/I/514o+ciBX6L._AC_UL320_.jpg",
      url: "https://www.amazon.in/U-S-Polo-Assn-Regular-I638-195-PL_Navy_X-Large/dp/B0793K15XT/ref=sr_1_19?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-19",
      brand: "U.S. POLO ASSN.",
      details: "Men's Regular fit T-Shirt",
      details_url:
        "https://www.amazon.in/U-S-Polo-Assn-Regular-I638-195-PL_Navy_X-Large/dp/B0793K15XT/ref=sr_1_19?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-19",
      ratings: "3.9 out of 5 stars",
      price: "549",
      price_url:
        "https://www.amazon.in/U-S-Polo-Assn-Regular-I638-195-PL_Navy_X-Large/dp/B0793K15XT/ref=sr_1_19?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-19",
    },
    {
      image: "https://m.media-amazon.com/images/I/719IAEfKb1L._AC_UL320_.jpg",
      url: "https://www.amazon.in/Levis-Plain-Regular-T-Shirt-PR680613_Navy/dp/B07XK8SWGC/ref=sr_1_20?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-20",
      brand: "Levi's",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/Levis-Plain-Regular-T-Shirt-PR680613_Navy/dp/B07XK8SWGC/ref=sr_1_20?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-20",
      ratings: "4.1 out of 5 stars",
      price: "494",
      price_url:
        "https://www.amazon.in/Levis-Plain-Regular-T-Shirt-PR680613_Navy/dp/B07XK8SWGC/ref=sr_1_20?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-20",
    },
    {
      image: "https://m.media-amazon.com/images/I/81C6QM7CnfL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDQ2NjAxMDA3ODk4OjowOjo&url=%2FJockey-Mens-T-Shirt-8901326103630_2714_Grey-Melange_M%2Fdp%2FB012ST6HFM%2Fref%3Dsr_1_21_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      brand: "Jockey",
      details: "Men's Regular Fit Round Neck Half Sleeved T-Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDQ2NjAxMDA3ODk4OjowOjo&url=%2FJockey-Mens-T-Shirt-8901326103630_2714_Grey-Melange_M%2Fdp%2FB012ST6HFM%2Fref%3Dsr_1_21_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      ratings: "4.2 out of 5 stars",
      price: "522",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDQ2NjAxMDA3ODk4OjowOjo&url=%2FJockey-Mens-T-Shirt-8901326103630_2714_Grey-Melange_M%2Fdp%2FB012ST6HFM%2Fref%3Dsr_1_21_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/71O1QaI-sbL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDg0Mjk0MzQyNjAyOjowOjo&url=%2FAELOMART-Shirt-Amt25105-P_Green-Green-Medium%2Fdp%2FB09KBK166K%2Fref%3Dsr_1_22_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      brand: "AELOMART",
      details: "Men's T Shirt-(Amt250105-P_Green)",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDg0Mjk0MzQyNjAyOjowOjo&url=%2FAELOMART-Shirt-Amt25105-P_Green-Green-Medium%2Fdp%2FB09KBK166K%2Fref%3Dsr_1_22_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      ratings: "3.8 out of 5 stars",
      price: "497",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDg0Mjk0MzQyNjAyOjowOjo&url=%2FAELOMART-Shirt-Amt25105-P_Green-Green-Medium%2Fdp%2FB09KBK166K%2Fref%3Dsr_1_22_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/81GbA9HxG5L._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDk3MTY0NzQ3MDk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LTB60033_Blue%2Fdp%2FB091KS8R3C%2Fref%3Dsr_1_23_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-23-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      brand: "Van Heusen",
      details:
        "Athleisure Men Polo T-Shirt - Cotton Rich - Ultra Soft, Short Sleeve, Textured",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDk3MTY0NzQ3MDk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LTB60033_Blue%2Fdp%2FB091KS8R3C%2Fref%3Dsr_1_23_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-23-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      ratings: "4.6 out of 5 stars",
      price: "669",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDk3MTY0NzQ3MDk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LTB60033_Blue%2Fdp%2FB091KS8R3C%2Fref%3Dsr_1_23_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-23-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/61uvkA2l8tL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDI3Mjc1Mjc5MDA0OjowOjo&url=%2FAMERICAN-CREW-Solid-T-Shirt-Applique%2Fdp%2FB07KPC1QWX%2Fref%3Dsr_1_24_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-24-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      brand: "AMERICAN CREW",
      details: "Men's Polo Collar Half Sleeve T-Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDI3Mjc1Mjc5MDA0OjowOjo&url=%2FAMERICAN-CREW-Solid-T-Shirt-Applique%2Fdp%2FB07KPC1QWX%2Fref%3Dsr_1_24_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-24-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      ratings: "3.9 out of 5 stars",
      price: "799",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfbXRmOjIwMDI3Mjc1Mjc5MDA0OjowOjo&url=%2FAMERICAN-CREW-Solid-T-Shirt-Applique%2Fdp%2FB07KPC1QWX%2Fref%3Dsr_1_24_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-24-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/61J9oSA9SYL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Urbano-Fashion-Mandarin-T-Shirt-mandplctee-drgreen-XL/dp/B08D7N6SP2/ref=sr_1_25?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-25",
      brand: "Urbano Fashion",
      details:
        "Men's Solid Mandarin Collar Slim Fit Half Sleeve Cotton T-Shirt",
      details_url:
        "https://www.amazon.in/Urbano-Fashion-Mandarin-T-Shirt-mandplctee-drgreen-XL/dp/B08D7N6SP2/ref=sr_1_25?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-25",
      ratings: "3.7 out of 5 stars",
      price: "399",
      price_url:
        "https://www.amazon.in/Urbano-Fashion-Mandarin-T-Shirt-mandplctee-drgreen-XL/dp/B08D7N6SP2/ref=sr_1_25?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-25",
    },
    {
      image: "https://m.media-amazon.com/images/I/51XkLH567OL._AC_UL320_.jpg",
      url: "https://www.amazon.in/EYEBOGLER-Mens-Regular-T-Shirt-T428HS_Grey/dp/B09VSRRM1D/ref=sr_1_26?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-26",
      brand: "EYEBOGLER",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/EYEBOGLER-Mens-Regular-T-Shirt-T428HS_Grey/dp/B09VSRRM1D/ref=sr_1_26?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-26",
      ratings: "3.1 out of 5 stars",
      price: "299",
      price_url:
        "https://www.amazon.in/EYEBOGLER-Mens-Regular-T-Shirt-T428HS_Grey/dp/B09VSRRM1D/ref=sr_1_26?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-26",
    },
    {
      image: "https://m.media-amazon.com/images/I/719KoPF5-0L._AC_UL320_.jpg",
      url: "https://www.amazon.in/Adidas-Fl_Spr-Shirt-Hl6046-M-White/dp/B096P4CDN9/ref=sr_1_27?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-27",
      brand: "Adidas",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/Adidas-Fl_Spr-Shirt-Hl6046-M-White/dp/B096P4CDN9/ref=sr_1_27?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-27",
      ratings: "4.0 out of 5 stars",
      price: "1,139",
      price_url:
        "https://www.amazon.in/Adidas-Fl_Spr-Shirt-Hl6046-M-White/dp/B096P4CDN9/ref=sr_1_27?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-27",
    },
    {
      image: "https://m.media-amazon.com/images/I/81kYjhfflJL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Amazon-Brand-Symbol-Regular-ESSPPO2D_Pink/dp/B07BDZ75YG/ref=sr_1_28?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-28",
      brand: "Amazon Brand - Symbol",
      details: "Men's Regular Polo Shirt",
      details_url:
        "https://www.amazon.in/Amazon-Brand-Symbol-Regular-ESSPPO2D_Pink/dp/B07BDZ75YG/ref=sr_1_28?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-28",
      ratings: "3.9 out of 5 stars",
      price: "549",
      price_url:
        "https://www.amazon.in/Amazon-Brand-Symbol-Regular-ESSPPO2D_Pink/dp/B07BDZ75YG/ref=sr_1_28?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-28",
    },
    {
      image: "https://m.media-amazon.com/images/I/61QVAU2K1lL._AC_UL320_.jpg",
      url: "https://www.amazon.in/AMERICAN-CREW-Regular-AC021R_Navy-Melange_X-Large/dp/B075JG3GQG/ref=sr_1_29?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-29",
      brand: "AMERICAN CREW",
      details: "Men's Polo Collar Half Sleeve T-Shirt",
      details_url:
        "https://www.amazon.in/AMERICAN-CREW-Regular-AC021R_Navy-Melange_X-Large/dp/B075JG3GQG/ref=sr_1_29?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-29",
      ratings: "3.9 out of 5 stars",
      price: "699",
      price_url:
        "https://www.amazon.in/AMERICAN-CREW-Regular-AC021R_Navy-Melange_X-Large/dp/B075JG3GQG/ref=sr_1_29?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-29",
    },
    {
      image: "https://m.media-amazon.com/images/I/41zvKQWEeHL._AC_UL320_.jpg",
      url: "https://www.amazon.in/JUGULAR-Cotton-Printed-T-Shirt-Small/dp/B0BF4LG2YR/ref=sr_1_30?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-30",
      brand: "JUGULAR",
      details: "Men's Cotton Printed T-Shirt",
      details_url:
        "https://www.amazon.in/JUGULAR-Cotton-Printed-T-Shirt-Small/dp/B0BF4LG2YR/ref=sr_1_30?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-30",
      ratings: "3.3 out of 5 stars",
      price: "289",
      price_url:
        "https://www.amazon.in/JUGULAR-Cotton-Printed-T-Shirt-Small/dp/B0BF4LG2YR/ref=sr_1_30?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-30",
    },
    {
      image: "https://m.media-amazon.com/images/I/51YuiNKFVTL._AC_UL320_.jpg",
      url: "https://www.amazon.in/EYEBOGLER-Mens-Regular-T-Shirt-T410_Blue/dp/B09VZ4CMX3/ref=sr_1_31?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-31",
      brand: "EYEBOGLER",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/EYEBOGLER-Mens-Regular-T-Shirt-T410_Blue/dp/B09VZ4CMX3/ref=sr_1_31?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-31",
      ratings: "3.1 out of 5 stars",
      price: "359",
      price_url:
        "https://www.amazon.in/EYEBOGLER-Mens-Regular-T-Shirt-T410_Blue/dp/B09VZ4CMX3/ref=sr_1_31?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-31",
    },
    {
      image: "https://m.media-amazon.com/images/I/7155LLT5aXL._AC_UL320_.jpg",
      url: "https://www.amazon.in/London-Hills-Solid-Round-T-Shirt/dp/B09RH8WD29/ref=sr_1_32?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-32",
      brand: "London Hills",
      details: "Solid Men's Round Neck Sports T-Shirt",
      details_url:
        "https://www.amazon.in/London-Hills-Solid-Round-T-Shirt/dp/B09RH8WD29/ref=sr_1_32?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-32",
      ratings: "3.8 out of 5 stars",
      price: "179",
      price_url:
        "https://www.amazon.in/London-Hills-Solid-Round-T-Shirt/dp/B09RH8WD29/ref=sr_1_32?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-32",
    },
    {
      image: "https://m.media-amazon.com/images/I/51+lL+s05ML._AC_UL320_.jpg",
      url: "https://www.amazon.in/U-S-POLO-ASSN-Regular-I714-PL_Navy/dp/B0B9XHMDQM/ref=sr_1_33?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-33",
      brand: "U.S. POLO ASSN.",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/U-S-POLO-ASSN-Regular-I714-PL_Navy/dp/B0B9XHMDQM/ref=sr_1_33?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-33",
      price: "919",
      price_url:
        "https://www.amazon.in/U-S-POLO-ASSN-Regular-I714-PL_Navy/dp/B0B9XHMDQM/ref=sr_1_33?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-33",
    },
    {
      image: "https://m.media-amazon.com/images/I/71G+MV7WPyL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Maniac-Round-Halfsleeve-Cotton-Tshirt/dp/B09TXKZDSB/ref=sr_1_34?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-34",
      brand: "Maniac",
      details:
        "Men's Tie and Dye Round Neck Halfsleeve Neon Green Cotton Slim Fit Tshirt",
      details_url:
        "https://www.amazon.in/Maniac-Round-Halfsleeve-Cotton-Tshirt/dp/B09TXKZDSB/ref=sr_1_34?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-34",
      ratings: "4.5 out of 5 stars",
      price: "494",
      price_url:
        "https://www.amazon.in/Maniac-Round-Halfsleeve-Cotton-Tshirt/dp/B09TXKZDSB/ref=sr_1_34?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-34",
    },
    {
      image: "https://m.media-amazon.com/images/I/61DkfcFSjBL._AC_UL320_.jpg",
      url: "https://www.amazon.in/LEOTUDE-Regular-Sleeve-T-Shirt-Color/dp/B09QHV3FY2/ref=sr_1_35?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-35",
      brand: "LEOTUDE",
      details: "Men's Regular Fit Cotton Blend Full Sleeve T-Shirt",
      details_url:
        "https://www.amazon.in/LEOTUDE-Regular-Sleeve-T-Shirt-Color/dp/B09QHV3FY2/ref=sr_1_35?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-35",
      ratings: "3.5 out of 5 stars",
      price: "339",
      price_url:
        "https://www.amazon.in/LEOTUDE-Regular-Sleeve-T-Shirt-Color/dp/B09QHV3FY2/ref=sr_1_35?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-35",
    },
    {
      image: "https://m.media-amazon.com/images/I/61kWHspTLbL._AC_UL320_.jpg",
      url: "https://www.amazon.in/London-Hills-Printed-Round-T-Shirt/dp/B09MTTCJQ2/ref=sr_1_36?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-36",
      brand: "London Hills",
      details: "Printed Men's Round Neck Black T-Shirt",
      details_url:
        "https://www.amazon.in/London-Hills-Printed-Round-T-Shirt/dp/B09MTTCJQ2/ref=sr_1_36?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-36",
      ratings: "3.8 out of 5 stars",
      price: "379",
      price_url:
        "https://www.amazon.in/London-Hills-Printed-Round-T-Shirt/dp/B09MTTCJQ2/ref=sr_1_36?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-36",
    },
    {
      image: "https://m.media-amazon.com/images/I/71ejKn8jYtL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Veirdo-Shoulder-Printed-Sleeves-Oversized/dp/B09TPGL93X/ref=sr_1_37?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-37",
      brand: "Veirdo",
      details:
        "100% Cotton Oversize Drop Shoulder Loose Fit Round Neck Graphic Printed T-Shirt for Men & Boys",
      details_url:
        "https://www.amazon.in/Veirdo-Shoulder-Printed-Sleeves-Oversized/dp/B09TPGL93X/ref=sr_1_37?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-37",
      ratings: "4.1 out of 5 stars",
      price: "449",
      price_url:
        "https://www.amazon.in/Veirdo-Shoulder-Printed-Sleeves-Oversized/dp/B09TPGL93X/ref=sr_1_37?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-37",
    },
    {
      image: "https://m.media-amazon.com/images/I/61OVuGDVHfL._AC_UL320_.jpg",
      url: "https://www.amazon.in/BULLMER-Cotton-Henley-Chinese-Collar/dp/B0B4NNH4VX/ref=sr_1_38?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-38",
      brand: "BULLMER",
      details: "Mens Cotton Henley Neck/Chinese Collar Tshirt",
      details_url:
        "https://www.amazon.in/BULLMER-Cotton-Henley-Chinese-Collar/dp/B0B4NNH4VX/ref=sr_1_38?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-38",
      ratings: "4.1 out of 5 stars",
      price: "440",
      price_url:
        "https://www.amazon.in/BULLMER-Cotton-Henley-Chinese-Collar/dp/B0B4NNH4VX/ref=sr_1_38?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-38",
    },
    {
      image: "https://m.media-amazon.com/images/I/71ELLSbG-HL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-AW19TEE25_Sunflower/dp/B09796DPT2/ref=sr_1_39?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-39",
      brand: "Amazon Brand - Symbol",
      details: "Men's Solid Regular Fit Half Sleeve Cotton T-Shirt",
      details_url:
        "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-AW19TEE25_Sunflower/dp/B09796DPT2/ref=sr_1_39?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-39",
      ratings: "4.0 out of 5 stars",
      price: "191.",
      price_url:
        "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-AW19TEE25_Sunflower/dp/B09796DPT2/ref=sr_1_39?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-39",
    },
    {
      image: "https://m.media-amazon.com/images/I/71O1QaI-sbL._AC_UL320_.jpg",
      url: "https://www.amazon.in/AELOMART-Shirt-Amt25105-P_Green-Green-Medium/dp/B09KBK166K/ref=sr_1_40?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-40",
      brand: "AELOMART",
      details: "Men's T Shirt-(Amt250105-P_Green)",
      details_url:
        "https://www.amazon.in/AELOMART-Shirt-Amt25105-P_Green-Green-Medium/dp/B09KBK166K/ref=sr_1_40?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-40",
      ratings: "3.8 out of 5 stars",
      price: "497",
      price_url:
        "https://www.amazon.in/AELOMART-Shirt-Amt25105-P_Green-Green-Medium/dp/B09KBK166K/ref=sr_1_40?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-40",
    },
    {
      image: "https://m.media-amazon.com/images/I/71ngkTOYJ2L._AC_UL320_.jpg",
      url: "https://www.amazon.in/Amazon-Brand-Symbol-Regular-SYM-SS22-TSH-06_Mid/dp/B09PNN9QNN/ref=sr_1_41?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-41",
      brand: "Amazon Brand - Symbol",
      details: "Men's Regular Fit T-Shirt",
      details_url:
        "https://www.amazon.in/Amazon-Brand-Symbol-Regular-SYM-SS22-TSH-06_Mid/dp/B09PNN9QNN/ref=sr_1_41?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-41",
      ratings: "3.9 out of 5 stars",
      price: "246.",
      price_url:
        "https://www.amazon.in/Amazon-Brand-Symbol-Regular-SYM-SS22-TSH-06_Mid/dp/B09PNN9QNN/ref=sr_1_41?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-41",
    },
    {
      image: "https://m.media-amazon.com/images/I/61Dl8WUFr7L._AC_UL320_.jpg",
      url: "https://www.amazon.in/EYEBOGLER-Striped-Regular-T-Shirt-T285HS_White/dp/B08N71T93S/ref=sr_1_42?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-42",
      brand: "EYEBOGLER",
      details: "Men's T-Shirt",
      details_url:
        "https://www.amazon.in/EYEBOGLER-Striped-Regular-T-Shirt-T285HS_White/dp/B08N71T93S/ref=sr_1_42?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-42",
      ratings: "3.8 out of 5 stars",
      price: "379",
      price_url:
        "https://www.amazon.in/EYEBOGLER-Striped-Regular-T-Shirt-T285HS_White/dp/B08N71T93S/ref=sr_1_42?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-42",
    },
    {
      image: "https://m.media-amazon.com/images/I/61p21cELnEL._AC_UL320_.jpg",
      url: "https://www.amazon.in/London-Hills-Printed-Sleeve-T-Shirt/dp/B09H7LT9KY/ref=sr_1_43?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-43",
      brand: "London Hills",
      details: "Printed Men Round Neck Full Sleeve T-Shirt",
      details_url:
        "https://www.amazon.in/London-Hills-Printed-Sleeve-T-Shirt/dp/B09H7LT9KY/ref=sr_1_43?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-43",
      ratings: "3.5 out of 5 stars",
      price: "314",
      price_url:
        "https://www.amazon.in/London-Hills-Printed-Sleeve-T-Shirt/dp/B09H7LT9KY/ref=sr_1_43?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-43",
    },
    {
      image: "https://m.media-amazon.com/images/I/51LZE1LELsL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Polo-Assn-Regular-T-Shirt-I643-240-PL_Burgundy/dp/B07CXXHLY3/ref=sr_1_44?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-44",
      brand: "U.S. POLO ASSN.",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/Polo-Assn-Regular-T-Shirt-I643-240-PL_Burgundy/dp/B07CXXHLY3/ref=sr_1_44?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-44",
      ratings: "4.0 out of 5 stars",
      price: "440",
      price_url:
        "https://www.amazon.in/Polo-Assn-Regular-T-Shirt-I643-240-PL_Burgundy/dp/B07CXXHLY3/ref=sr_1_44?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-44",
    },
    {
      image: "https://m.media-amazon.com/images/I/619SqQW1NYL._AC_UL320_.jpg",
      url: "https://www.amazon.in/RodZen-Cotton-Regular-Striped-T-Shirt/dp/B09CP1YBVG/ref=sr_1_45?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-45",
      brand: "RodZen",
      details: "Men's Cotton Half Sleeve Regular Fit Striped T-Shirt",
      details_url:
        "https://www.amazon.in/RodZen-Cotton-Regular-Striped-T-Shirt/dp/B09CP1YBVG/ref=sr_1_45?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-45",
      ratings: "3.6 out of 5 stars",
      price: "349",
      price_url:
        "https://www.amazon.in/RodZen-Cotton-Regular-Striped-T-Shirt/dp/B09CP1YBVG/ref=sr_1_45?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-45",
    },
    {
      image: "https://m.media-amazon.com/images/I/51p-B6tbDiL._AC_UL320_.jpg",
      url: "https://www.amazon.in/GRITSTONES-Sleeve-Oversized-T-Shirt-GSHSTSHT2956BLK_L/dp/B0B6HSGYS8/ref=sr_1_46?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-46",
      brand: "GRITSTONES",
      details: "Men Half Sleeve Oversized Cotton Solid T-Shirt",
      details_url:
        "https://www.amazon.in/GRITSTONES-Sleeve-Oversized-T-Shirt-GSHSTSHT2956BLK_L/dp/B0B6HSGYS8/ref=sr_1_46?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-46",
      ratings: "3.7 out of 5 stars",
      price: "349",
      price_url:
        "https://www.amazon.in/GRITSTONES-Sleeve-Oversized-T-Shirt-GSHSTSHT2956BLK_L/dp/B0B6HSGYS8/ref=sr_1_46?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-46",
    },
    {
      image: "https://m.media-amazon.com/images/I/61op9+lbKmL._AC_UL320_.jpg",
      url: "https://www.amazon.in/BULLMER-Regular-Printed-Cotton-Tshirt/dp/B0B71Z672X/ref=sr_1_47?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-47",
      brand: "BULLMER",
      details:
        "Mens Regular Fit Printed Round Neck Cotton Tshirt Pack of 3 - Maroon/Yellow",
      details_url:
        "https://www.amazon.in/BULLMER-Regular-Printed-Cotton-Tshirt/dp/B0B71Z672X/ref=sr_1_47?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-47",
      ratings: "3.6 out of 5 stars",
      price: "488",
      price_url:
        "https://www.amazon.in/BULLMER-Regular-Printed-Cotton-Tshirt/dp/B0B71Z672X/ref=sr_1_47?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-47",
    },
    {
      image: "https://m.media-amazon.com/images/I/613X7ikgc2L._AC_UL320_.jpg",
      url: "https://www.amazon.in/Captain-America-Free-Authority-STY-18-19-002669_White_Large/dp/B07SK278BX/ref=sr_1_48?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-48",
      brand: "Captain America by Free Authority",
      details: "Men Men T-Shirt",
      details_url:
        "https://www.amazon.in/Captain-America-Free-Authority-STY-18-19-002669_White_Large/dp/B07SK278BX/ref=sr_1_48?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-48",
      ratings: "3.2 out of 5 stars",
      price: "240",
      price_url:
        "https://www.amazon.in/Captain-America-Free-Authority-STY-18-19-002669_White_Large/dp/B07SK278BX/ref=sr_1_48?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-48",
    },
    {
      image: "https://m.media-amazon.com/images/I/710vk255SSL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Amazon-Brand-Symbol-Regular-AW17MPCP5_M_Pink/dp/B073X2QWYL/ref=sr_1_49?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-49",
      brand: "Amazon Brand - Symbol",
      details: "Men's Regular Polo Shirt",
      details_url:
        "https://www.amazon.in/Amazon-Brand-Symbol-Regular-AW17MPCP5_M_Pink/dp/B073X2QWYL/ref=sr_1_49?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-49",
      ratings: "3.9 out of 5 stars",
      price: "339",
      price_url:
        "https://www.amazon.in/Amazon-Brand-Symbol-Regular-AW17MPCP5_M_Pink/dp/B073X2QWYL/ref=sr_1_49?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-49",
    },
    {
      image: "https://m.media-amazon.com/images/I/61ABjYysC2L._AC_UL320_.jpg",
      url: "https://www.amazon.in/GRITSTONES-Sleeve-Cotton-T-Shirt-GSFSCMBHYNCK2213BLKWHT_XL/dp/B0BF5JF2QP/ref=sr_1_50?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-50",
      brand: "GRITSTONES",
      details: "Men Full Sleeve Cotton High Neck T-Shirt Pack of 2",
      details_url:
        "https://www.amazon.in/GRITSTONES-Sleeve-Cotton-T-Shirt-GSFSCMBHYNCK2213BLKWHT_XL/dp/B0BF5JF2QP/ref=sr_1_50?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-50",
      ratings: "3.5 out of 5 stars",
      price: "499",
      price_url:
        "https://www.amazon.in/GRITSTONES-Sleeve-Cotton-T-Shirt-GSFSCMBHYNCK2213BLKWHT_XL/dp/B0BF5JF2QP/ref=sr_1_50?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-50",
    },
    {
      image: "https://m.media-amazon.com/images/I/813gJRfNKKL._AC_UL320_.jpg",
      url: "https://www.amazon.in/SHAUN-Men-T-Shirt-N704MT3_D42_Multicolored_Large_Pack-3/dp/B09QMDFKK2/ref=sr_1_51?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-51",
      brand: "SHAUN",
      details: "Men T-Shirt (N704MT3_$P_Pack of 3)",
      details_url:
        "https://www.amazon.in/SHAUN-Men-T-Shirt-N704MT3_D42_Multicolored_Large_Pack-3/dp/B09QMDFKK2/ref=sr_1_51?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-51",
      ratings: "3.6 out of 5 stars",
      price: "533",
      price_url:
        "https://www.amazon.in/SHAUN-Men-T-Shirt-N704MT3_D42_Multicolored_Large_Pack-3/dp/B09QMDFKK2/ref=sr_1_51?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-51",
    },
    {
      image: "https://m.media-amazon.com/images/I/81BueXNyPiL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-SS19TSHSRNPO3-4_Multicolor_Large/dp/B07NF4CD53/ref=sr_1_52?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-52",
      brand: "Amazon Brand - Symbol",
      details: "Men's Regular T-Shirt",
      details_url:
        "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-SS19TSHSRNPO3-4_Multicolor_Large/dp/B07NF4CD53/ref=sr_1_52?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-52",
      ratings: "4.0 out of 5 stars",
      price: "1,238",
      price_url:
        "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-SS19TSHSRNPO3-4_Multicolor_Large/dp/B07NF4CD53/ref=sr_1_52?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-52",
    },
    {
      image: "https://m.media-amazon.com/images/I/71HkNsDBkpL._AC_UL320_.jpg",
      url: "https://www.amazon.in/French-Connection-T-Shirt-519CS-DEEP-Teal_DEEP/dp/B09RSJLVZ8/ref=sr_1_53?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-53",
      brand: "French Connection",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/French-Connection-T-Shirt-519CS-DEEP-Teal_DEEP/dp/B09RSJLVZ8/ref=sr_1_53?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-53",
      ratings: "3.8 out of 5 stars",
      price: "943",
      price_url:
        "https://www.amazon.in/French-Connection-T-Shirt-519CS-DEEP-Teal_DEEP/dp/B09RSJLVZ8/ref=sr_1_53?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-53",
    },
    {
      image: "https://m.media-amazon.com/images/I/61hh8wS16wL._AC_UL320_.jpg",
      url: "https://www.amazon.in/BLIVE-Regular-Henley-Sleeve-Cotton/dp/B08PSZMZ7J/ref=sr_1_54?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-54",
      brand: "BLIVE",
      details:
        "Regular fit Solid Men's Henley Neck Full Sleeve Cotton Blend T Shirts",
      details_url:
        "https://www.amazon.in/BLIVE-Regular-Henley-Sleeve-Cotton/dp/B08PSZMZ7J/ref=sr_1_54?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-54",
      ratings: "3.3 out of 5 stars",
      price: "249",
      price_url:
        "https://www.amazon.in/BLIVE-Regular-Henley-Sleeve-Cotton/dp/B08PSZMZ7J/ref=sr_1_54?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-54",
    },
    {
      image: "https://m.media-amazon.com/images/I/61Oc30MH3lL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-SYM-T-CD3-D6_Sandshell/dp/B097978LJQ/ref=sr_1_55?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-55",
      brand: "Amazon Brand - Symbol",
      details: "Men T-Shirt",
      details_url:
        "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-SYM-T-CD3-D6_Sandshell/dp/B097978LJQ/ref=sr_1_55?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-55",
      ratings: "5.0 out of 5 stars",
      price: "649",
      price_url:
        "https://www.amazon.in/Amazon-Brand-Regular-T-Shirt-SYM-T-CD3-D6_Sandshell/dp/B097978LJQ/ref=sr_1_55?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-55",
    },
    {
      image: "https://m.media-amazon.com/images/I/71X7wb85ViL._AC_UL320_.jpg",
      url: "https://www.amazon.in/Arrow-Printed-Regular-T-Shirt-ASABTS3309_Lt/dp/B08W1RKV23/ref=sr_1_56?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-56",
      brand: "Arrow",
      details: "Men Sky Blue Short Sleeve Printed T-Shirt",
      details_url:
        "https://www.amazon.in/Arrow-Printed-Regular-T-Shirt-ASABTS3309_Lt/dp/B08W1RKV23/ref=sr_1_56?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-56",
      price: "449",
      price_url:
        "https://www.amazon.in/Arrow-Printed-Regular-T-Shirt-ASABTS3309_Lt/dp/B08W1RKV23/ref=sr_1_56?crid=3E5APAEHO7NZS&keywords=men+tshirts&qid=1671097414&sprefix=men+tshir%2Caps%2C384&sr=8-56",
    },
    {
      image: "https://m.media-amazon.com/images/I/71d9jtOif2L._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDYxNjA2NDE0MDk4OjowOjo&url=%2FAELOMART-Mens-Shirt-Medium-Black%2Fdp%2FB0B6Q9JH89%2Fref%3Dsr_1_57_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-57-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      brand: "AELOMART",
      details: "Men's T Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDYxNjA2NDE0MDk4OjowOjo&url=%2FAELOMART-Mens-Shirt-Medium-Black%2Fdp%2FB0B6Q9JH89%2Fref%3Dsr_1_57_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-57-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      ratings: "4.0 out of 5 stars",
      price: "497",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDYxNjA2NDE0MDk4OjowOjo&url=%2FAELOMART-Mens-Shirt-Medium-Black%2Fdp%2FB0B6Q9JH89%2Fref%3Dsr_1_57_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-57-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/71CPzIvedhL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDM2ODAzMDU4OTAyOjowOjo&url=%2FAELOMART-Mens-Cotton-Shirt-Amt1020mdb_Mustard_Large%2Fdp%2FB07TRH5FRH%2Fref%3Dsr_1_58_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-58-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      brand: "AELOMART",
      details: "Men's Cotton T-Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDM2ODAzMDU4OTAyOjowOjo&url=%2FAELOMART-Mens-Cotton-Shirt-Amt1020mdb_Mustard_Large%2Fdp%2FB07TRH5FRH%2Fref%3Dsr_1_58_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-58-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      ratings: "3.9 out of 5 stars",
      price: "472",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDM2ODAzMDU4OTAyOjowOjo&url=%2FAELOMART-Mens-Cotton-Shirt-Amt1020mdb_Mustard_Large%2Fdp%2FB07TRH5FRH%2Fref%3Dsr_1_58_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-58-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/71bblxN51EL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDk3MTY0NzQ3NDk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LDO60033_Orange%2Fdp%2FB091KS58XN%2Fref%3Dsr_1_59_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-59-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      brand: "Van Heusen",
      details: "Men's Regular Fit Polo Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDk3MTY0NzQ3NDk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LDO60033_Orange%2Fdp%2FB091KS58XN%2Fref%3Dsr_1_59_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-59-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      ratings: "4.0 out of 5 stars",
      price: "829",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDk3MTY0NzQ3NDk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LDO60033_Orange%2Fdp%2FB091KS58XN%2Fref%3Dsr_1_59_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-59-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
    },
    {
      image: "https://m.media-amazon.com/images/I/71K30E4uDgL._AC_UL320_.jpg",
      url: "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDk3MTY0NzQ5OTk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LGMN60032_Green%2Fdp%2FB091KT7V2S%2Fref%3Dsr_1_60_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-60-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      brand: "Van Heusen",
      details: "Men's Regular Fit Polo Shirt",
      details_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDk3MTY0NzQ5OTk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LGMN60032_Green%2Fdp%2FB091KT7V2S%2Fref%3Dsr_1_60_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-60-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      ratings: "4.4 out of 5 stars",
      price: "1,149",
      price_url:
        "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0NjQzOTQzNjU5Mjk2Mjk1OjE2NzEwOTc0MTQ6c3BfYnRmOjIwMDk3MTY0NzQ5OTk4OjowOjo&url=%2FVan-Heusen-Regular-Shirt-IHTS1LGMN60032_Green%2Fdp%2FB091KT7V2S%2Fref%3Dsr_1_60_sspa%3Fcrid%3D3E5APAEHO7NZS%26keywords%3Dmen%2Btshirts%26qid%3D1671097414%26sprefix%3Dmen%2Btshir%252Caps%252C384%26sr%3D8-60-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
    },
  ],
};

const Products = () => {
  return (
    <Box pt={"120px"}>
      <ProductContainer data={obj.tshirts} />
    </Box>
  );
};

export default Products;
