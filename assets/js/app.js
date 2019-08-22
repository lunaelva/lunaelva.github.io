(function($) {

 function init() {
    /* Sidebar height set */
    $sidebarStyles = $('.sidebar').attr('style') || "";
    $sidebarStyles += ' min-height: ' + $(document).height() + 'px;';
    $('.sidebar').attr('style', $sidebarStyles);

    /* Secondary contact links */
    var $scontacts = $('#contact-list-secondary');
    var $contactList = $('#contact-list');

    $scontacts.hide();
    $contactList.mouseenter(function(){ $scontacts.fadeIn(); });
    $contactList.mouseleave(function(){ $scontacts.fadeOut(); });

    /**
     * Tags & categories tab activation based on hash value. If hash is undefined then first tab is activated.
     */
    function activateTab() {
      if(['/tags.html', '/categories.html'].indexOf(window.location.pathname) > -1) {
        var hash = window.location.hash;
        if(hash)
          $('.tab-pane').length && $('a[href="' + hash + '"]').tab('show');
        else
          $('.tab-pane').length && $($('.cat-tag-menu li a')[0]).tab('show');
      }
    }

    // watch hash change and activate relevant tab
    $(window).on('hashchange', activateTab);

    // initial activation
    activateTab();

    //custom
    function showCategoryContent(){
      if(['/categories2.html'].indexOf(window.location.pathname) > -1) {
        var hash = window.location.hash;
        $(".maan_category").hide();
        $("#maan_menu li").attr("style", "cursor: pointer");
        if(hash){
          $("#maan_menu li:eq("+ $(hash).index()+")").attr("style","background-color: #dfede8;color: #2c3e50;font-weight: bold;");
          $(hash).show();
        }else{
          $("#maan_menu li:eq(0)").attr("style", "background-color: #dfede8;color: #2c3e50;font-weight: bold;");
          $(".maan_category:eq(0)").show();
        }
      }
    }
    showCategoryContent();

    $("#maan_menu li").click(function(){
      var menuId = $(this).attr("id").split("_")[1];
      location.href="/categories2.html#"+menuId+"-ref";
      showCategoryContent();      
    });
  };

  // run init on document ready
  $(document).ready(init);

})(jQuery);