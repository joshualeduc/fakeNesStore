using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace fakeNES.Models
{
  public class GameRepository
  {
    internal List<Game> Retrieve()
    {
      var filePath = HostingEnvironment.MapPath(@"~/App_Data/workingGameList.json");

      var json = System.IO.File.ReadAllText(filePath);

      var products = JsonConvert.DeserializeObject<List<Game>>(json);

      return products;
    }
  }
}