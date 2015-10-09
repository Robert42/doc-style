/* The MIT License (MIT)
 * 
 * Copyright (c) 2015 Robert Hildebrandt
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function adaptBreadcrums()
{
  $(".content-root>li").remove();
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

function adaptWarningOrNote(element, panelClass, docStyleClass)
{
  $("p > b:contains('"+element+":')").each(function() {
    var element = $(this);
  
    p = element.parent();
    
    element.addClass(docStyleClass + "-label");
    
    p.replaceWith("<div class='panel "+panelClass+" "+docStyleClass+"'><div class='panel-body'>"+p.html()+"</div></div>");
  });
}

function adaptWarning()
{
  adaptWarningOrNote("Warning", "panel-warning", "doc-style-warning");
}

function adaptNote()
{
  adaptWarningOrNote("Note", "panel-info", "doc-style-note");
}

function _addPager(naviArea)
{
  var prevPageElement = $(naviArea+" > .prevPage");
  var nextPageElement = $(naviArea+" > .nextPage");
  var navi = $(naviArea);
  
  if(navi && (prevPageElement || nextPageElement))
  {
    var prev = "";
    var next = "";
    
    var prevText = prevPageElement.text();
    var nextText = nextPageElement.text();
    
    if(prevText)
    {
      var text = prevText;
      var href = prevPageElement.attr("href");
      prev = "<li class='previous'><a href='"+href+"'><span aria-hidden='true'>&larr;</span> "+text+"</a></li>";
    }
    if(nextText)
    {
      var text = nextText;
      var href = nextPageElement.attr("href");
      next = "<li class='next'><a href='"+href+"'>"+text+" <span aria-hidden='true'>&rarr;</span></a></li>";
    }
  
    navi.replaceWith("<nav><ul class='pager'>"+prev+next+"</ul></nav>");
  }
}

function addPager()
{
  _addPager(".footerNavi");
  //_addPager(".headerNavi");
  $(".headerNavi").remove();
}

$(document).ready(function() {
  adaptBreadcrums();
  if(isFile("index.html"))
  {
    removeTitle();
  }else
  {
    adaptBrief();
    adaptTitle();
    adaptSidebar();
  }
  
  adaptWarning();
  adaptNote();
  addPager();
});
