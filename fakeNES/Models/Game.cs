using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace fakeNES.Models
{
  public class Game
  {
    public string Deck { get; set; }
    public double Id { get; set; }
    public ImageSizes Image { get; set; }
    public string Name { get; set; }
    public string Original_Release_Date { get; set; }
    public List<Info> Developers { get; set; }
    public List<Info> Genres { get; set; }
  }

  public class ImageSizes
  {
    public string Icon_Url { get; set; }
    public string Medium_Url { get; set; }
    public string Screen_Url { get; set; }
    public string Small_Url { get; set; }
    public string Super_Url { get; set; }
    public string Thumb_Url { get; set; }
    public string Tiny_Url { get; set; }
  }

  public class Info
  {
    public string Api_Detail_Url { get; set; }
    public double Id { get; set; }
    public string Name { get; set; }
    public string Site_Detail_Url { get; set; }
  }
}