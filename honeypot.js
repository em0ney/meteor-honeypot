Honeypot = {
  isHuman: function(form) {
    var isHuman = $(form).find("input.hpot:checkbox:checked").size() > 0 ? false : true;
    isHuman = isHuman && ($(form).find("input.hpot:text").map(function(idx, obj) {
      return $(obj).val() === "";
    }).filter(function(idx, obj) { return obj === false; }).size() > 0 ? false : true);
    return isHuman;
  },
  removeHoneypotFields: function(form) {
    $(form).find(".hpot").remove();
  }
}