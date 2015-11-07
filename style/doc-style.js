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
  var p = $(".content-root > h1.title + p");

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
  
  $("div.toc > h3 > a").each(function(){
    tocHeader = $(this);
    tocHeader.replaceWith(tocHeader.html());
  });
  
  $(".toc > ul").addClass("list-unstyled");
  
  var toc = $("div.toc");
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

function _adaptOverviewTables(selector)
{
  $("div.table > " + selector).each(function(){
    var table = $(this);
    var div = table.parent();
    
    div.attr("class", "panel panel-default");
    table.attr("class", "table table-bordered");
  });
}

function adaptOverviewTables()
{
  _adaptOverviewTables("table.annotated");
  _adaptOverviewTables("table.alignedsummary");
}

function _adaptOverviewLists(selector)
{
  var ul = $(selector);
  ul.wrap("<div class='panel panel-default'></div>");
  ul.addClass("list-group");
  ul.children().addClass("list-group-item");
}

function adaptOverviewLists()
{
  _adaptOverviewLists("h2#properties + ul");
}

function adaptLinkToMemberPage(text)
{
  var linkToAllMembers = $(".content-root > ul > li > a:contains('"+text+"')");
  linkToAllMembers.parent().parent().addClass("list-unstyled");
  linkToAllMembers.html("<span aria-hidden='true'>&raquo;</span> "+linkToAllMembers.html());
}

function adaptLinkToMembers()
{
  adaptLinkToMemberPage("List of all members");
}

function makeLiUnstyled(text)
{
  var li = $(".content-root > ul > li:contains('"+text+"')");
  li.parent().addClass("list-unstyled");
}


function adaptTablesInPanel(parentClass, tableclass)
{
  $("div."+parentClass+" > div.panel > div.panel-body > div.table > table"+tableclass).each(function(){
    var table = $(this);
    table.addClass("table");
    var div_table = table.parent();
    div_table.parent().after(div_table.html());
    div_table.remove();
  });
}

function adaptNamespaceTypeMemberDetails(parentClass)
{
  // Make it a panel
  $("div."+parentClass).each(function(){
    var root = $(this);
    
    var oldHtml = root.html();
    var newHtml = "";
    
    var prevIndex = 0;
    var newIndex = -1;
    
    while((newIndex = oldHtml.indexOf("<h3", prevIndex+1)) != -1)
    {
      newHtml = newHtml + oldHtml.substring(prevIndex, newIndex)
      if(prevIndex != 0)
        newHtml = newHtml + "</div>\n</div>\n";
      newHtml = newHtml + "<div class='panel panel-default'>\n";
      newHtml = newHtml + "<div class='panel-heading'>\n";
      
      prevIndex = newIndex;
    }
    
    newHtml = newHtml + oldHtml.substring(prevIndex, oldHtml.length);
    if(prevIndex != 0)
      newHtml = newHtml + "</div>\n</div>\n";
    
    prevIndex = 0;
    newIndex = -1;
    
    oldHtml = newHtml;
    newHtml = "";
    
    while((newIndex = oldHtml.indexOf("</h3>", prevIndex+1)) != -1)
    {
      newIndex += 5;
      newHtml = newHtml + oldHtml.substring(prevIndex, newIndex)
      newHtml = newHtml + "\n</div>\n";
      newHtml = newHtml + "<div class='panel-body'>\n";
      
      prevIndex = newIndex;
    }
    
    newHtml = newHtml + oldHtml.substring(prevIndex, oldHtml.length);
    
    root.html(newHtml);
  });
  
  // Make the panel heading small by removing the h3 tag
  $("div."+parentClass + " > div.panel > div.panel-heading > h3").each(function(){
    $(this).replaceWith($(this).html());
  });
}

function exists(selector)
{
  wasFound = false;
  
  $(selector).each(function(){wasFound=true;});
  
  return wasFound;
}

function adaptMemberDetails()
{
  adaptNamespaceTypeMemberDetails("classes");
  adaptNamespaceTypeMemberDetails("types");
  adaptNamespaceTypeMemberDetails("func");
  adaptNamespaceTypeMemberDetails("vars");
  adaptNamespaceTypeMemberDetails("prop");
  adaptNamespaceTypeMemberDetails("macros");
   
  if(exists("div.content-root > h1.title:contains(Obsolete)"))
    adaptNamespaceTypeMemberDetails("content-root");
  
  adaptTablesInPanel("types", ".valuelist");
}

function adaptLabel(label)
{
  $("code:contains('["+label+"]')").each(function(){
    var code = $(this);
    var parent = code.parent();
    code.remove();
    
    var rightAligned = "style='float:right'";
    var labelHtml = "<span class='label label-default'"+rightAligned+">"+label+"</span>";
    parent.html(parent.html() + labelHtml);
  });
}

function adaptLabels()
{
  adaptLabel("protected");
  adaptLabel("static");
  adaptLabel("static protected");
  adaptLabel("signal");
  adaptLabel("slot");
  adaptLabel("protected slot");
  adaptLabel("virtual");
  adaptLabel("virtual protected");
  adaptLabel("pure virtual");
  adaptLabel("pure virtual protected");
  adaptLabel("override");
  adaptLabel("final");
}

function adaptVersion()
{
  var version = $("p.lead + div.panel.panel-default > table.table > tbody > tr >  td.memItemLeft:contains('Since:') + td.memItemRight:contains('Qt')");
  
  version.each(function(){
    var v = $(this);
    var t = v.text();
    t = t.replace('Qt', '');
    t = t.trim();
    
    v.text(t);
    v.addClass("SinceVersion");
  });
}

function adaptChapterAndPart()
{
  var h0 = $('h0');
  
  h0.replaceWith('<h1 class="page-header">' + h0.text() + '</h1>');
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
  
  adaptOverviewTables();
  adaptOverviewLists();
  adaptLinkToMembers();
  makeLiUnstyled("functions inherited from");
  makeLiUnstyled("member inherited from");
  
  adaptMemberDetails();
  adaptLabels();
  
  adaptVersion();
  
  adaptChapterAndPart();
});
