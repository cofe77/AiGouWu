"use strict";
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2[OrderStatus2["WAIT_FOR_PAY"] = 0] = "WAIT_FOR_PAY";
  OrderStatus2[OrderStatus2["WAIT_FOR_DELIVERY"] = 1] = "WAIT_FOR_DELIVERY";
  OrderStatus2[OrderStatus2["WAIT_FOR_RECEIVING"] = 2] = "WAIT_FOR_RECEIVING";
  OrderStatus2[OrderStatus2["FINISHED"] = 3] = "FINISHED";
  OrderStatus2[OrderStatus2["WAIT_FOR_EVALUATE"] = 4] = "WAIT_FOR_EVALUATE";
  OrderStatus2[OrderStatus2["CANCELED"] = 5] = "CANCELED";
  return OrderStatus2;
})(OrderStatus || {});
exports.OrderStatus = OrderStatus;
