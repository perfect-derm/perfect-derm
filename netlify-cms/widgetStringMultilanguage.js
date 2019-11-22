var StringControl = createClass({
    handleChange: function(e) {
        this.currentValue = e.target.value;
    //   this.props.onChange(e.target.value);
    },
  
    style: {
        "display":"block",
        "width":"100%",
        "boxShadow":"none",
        "backgroundColor":"rgb(255, 255, 255)",
        "color":"rgb(68, 74, 87)",
        "position":"relative",
        "fontSize":"15px",
        "lineHeight":"1.5",
        "padding":"16px 20px",
        "margin":"0px",
        "borderWidth":"2px",
        "borderStyle":"solid",
        "borderColor":"rgb(223, 223, 227)",
        "borderImage":"initial",
        "borderRadius":"0px 5px 5px",
        "outline":"0px",
        "transition":"border-color 0.2s ease 0s"
    },

    render: function() {
    //   var value = this.props.value;
      return h('input', { 
          type: 'text', 
        //   value: this.props.value ? this.props.value : '', 
          onChange: this.handleChange,
          style: this.style
        });
    }
});
  
// var StringPreview = createClass({
//     render: function() {
//         return h('div', {
//             style: {
//                 "display":"inline",
//                 "backgroundColor":"rgb(255, 255, 255)"
//             }
//         }, this.currentValue);
//     }
// });

CMS.registerWidget({
    name: 'stringMultilanguage', 
    controlComponent: StringControl, 
    previewComponent: false,
    globalStyles: false
});
