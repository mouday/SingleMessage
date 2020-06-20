import { Message } from "element-ui";

class SingleMessage {
  static message(options) {
    // 判断是否已经弹框
    if (document.getElementsByClassName("el-message").length === 0) {
      Message(options);
    }
  }

  static _message(message, type, options = null) {
    let _options = {
      message: message,
      type: type,
    };

    if (options) {
      _options = Object.assign(_options, options);
    }

    this.message(_options);
  }

  static success(message, options = null) {
    this._message(message, "success", options);
  }

  static warning(message, options = null) {
    this._message(message, "warning", options);
  }

  static info(message, options = null) {
    this._message(message, "info", options);
  }

  static error(message, options = null) {
    this._message(message, "error", options);
  }

  static close() {
    Message.close();
  }
}

export default SingleMessage;
