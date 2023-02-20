"use strict";
const mock_type_entity_cart = require("./type/entity/cart.js");
const mock_type_entity_goods = require("./type/entity/goods.js");
const mock_type_entity_order = require("./type/entity/order.js");
const SPU_1 = {
  product: {
    name: "",
    price: 1,
    selling: 2,
    salesVolume: 20,
    category: "\u7535\u5668/\u7535\u89C6",
    channel: mock_type_entity_goods.ProductChannel.OVERSEAS,
    img: "",
    desc: "",
    brand: {
      title: "\u5609\u5B9D",
      logo: ""
    }
  },
  SKU: {
    title: "\u989C\u8272",
    value: "\u767D",
    stock: 10
  },
  comment: []
};
const goods_1 = {
  SPU: SPU_1,
  count: 20
};
const coupon_1 = {
  title: "\u6EE110\u51CF1",
  type: mock_type_entity_cart.CouponTypeType.ANY_DISCOUNT,
  amount: 20,
  usedAmount: 20
};
const cartItem_1 = {
  goods: goods_1,
  coupon: [coupon_1],
  price: 20,
  freight: 10,
  total: 30
};
const category_1 = {
  title: "\u7535\u5668",
  level: 1,
  item: [
    {
      title: "\u7535\u89C6",
      level: 2,
      item: [SPU_1]
    }
  ]
};
const brand_1 = {
  title: "\u5609\u5B9D",
  logo: ""
};
({
  name: "",
  price: 1,
  selling: 2,
  salesVolume: 20,
  category: "\u7535\u5668/\u7535\u89C6",
  channel: mock_type_entity_goods.ProductChannel.OVERSEAS,
  img: "",
  desc: "",
  brand: brand_1
});
const cart_1 = {
  goods: {
    self: [cartItem_1],
    outside: [cartItem_1],
    other: [cartItem_1]
  },
  address: {
    name: "string",
    tel: "string",
    location: {
      province: "string",
      city: "string",
      area: "string",
      town: "string",
      detail: "string"
    }
  },
  coupon: [coupon_1],
  freight: 30,
  totalPrice: 120
};
({
  ...cart_1,
  status: mock_type_entity_order.OrderStatus.FINISHED,
  createTime: "string"
});
const homePageInitData = {
  category: [
    category_1,
    {
      title: "\u7535\u5668",
      level: 1,
      item: [
        {
          title: "\u7535\u89C6",
          level: 2,
          item: [SPU_1]
        }
      ]
    }
  ],
  banner: [
    {
      title: "111122",
      img: "../../static/banner-1.png",
      target: "http://www.baidu.com"
    },
    {
      title: "111122",
      img: "../../static/home-head.png",
      target: "321312"
    },
    {
      title: "111122",
      img: "../../static/banner-1.png",
      target: "321312"
    }
  ],
  quickAccess: [
    {
      title: "",
      icon: "",
      target: ""
    }
  ],
  newCustomer: {
    url: "",
    img: ""
  },
  promotion: {
    daily: {
      startTime: "",
      url: "string",
      img: "string",
      color: "string"
    },
    groupon: {
      title: "string",
      subTitle: "string",
      url: "string",
      img: "string",
      color: "string"
    },
    new: {
      title: "string",
      subTitle: "string",
      url: "string",
      img: "string",
      color: "string"
    }
  },
  wellChosen: [
    {
      main: {
        title: "string",
        subTitle: "string",
        url: "string",
        img: "string",
        color: "string"
      },
      sub: [
        SPU_1
      ]
    }
  ],
  guessYouLike: [SPU_1]
};
exports.homePageInitData = homePageInitData;
