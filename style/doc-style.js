function adaptBreadcrums()
{
  $(".content-root>li").remove(); // Remove the leading <li>Title</li> after the <!-- END POSTHEADER --> comment automatically added by QDoc
}

function removeTitle()
{
  $(".content-root>h1.title").remove(); // Remove the title <h1 class="title"></h1> automatically added by QDoc
  $(".content-root>span.subtitle").remove(); // Remove the title <span class="subtitle"></span> automatically added by QDoc
  $(".content-root>span.small-subtitle").remove(); // Remove the title <span class="subtitle"></span> automatically added by QDoc
}

function adaptBrief()
{
  var p = $(".content-root > p");

  if(p && p.html())
  {
    p.addClass("lead");
  }
}

function adaptTitle()
{
  var title = $(".content-root>h1.title");
  var subtitle = $(".content-root>span.subtitle");
  var smallSubtitle = $(".content-root>span.small-subtitle");
	
  var subtitleHtml = subtitle.html();
  var smallSubtitleHtml = smallSubtitle.html();
  
  subtitle.remove();
  smallSubtitle.remove();
  
  if(!subtitleHtml)
	  subtitleHtml = smallSubtitleHtml;
  else if(smallSubtitleHtml)
	  subtitleHtml = subtitleHtml + smallSubtitleHtml;
  
  if(subtitleHtml)
  {
    var titleHtml = title.html();
    title.html(titleHtml + "&nbsp;<small><small class='text-muted'>" + subtitleHtml + "</small></small>");
  }
  
  title.addClass("page-header");
}

function adaptSidebar()
{
  var oldSidebar = $(".content-root > div.sidebar");
  var newSidebar = $(".sidebar-root");
  
  newSidebar.html(oldSidebar.html());
  
  oldSidebar.remove();
  
  $(".toc > ul").addClass("list-unstyled");
  
  var toc = $(".toc");
  toc.addClass("panel panel-default");
  toc.html("<div class='panel-body'>" + toc.html() +  "</div>");
}

function getFilename()
{
  var fullUrl = window.location.pathname;
  fullUrl = fullUrl.replace('\\', '/');
  filename = fullUrl.split('/').pop();
  return filename;
}

function isFile(filename)
{
  return getFilename() == filename;
}

$(document).ready(function() {
  adaptBreadcrums();
  if(isFile("index.html"))
  {
    removeTitle();
  }else
  {
    adaptBrief(); // Must be called bevore removing/manipulating the title
    adaptTitle();
    adaptSidebar();
  }
});
