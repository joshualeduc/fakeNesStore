using fakeNES.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace fakeNES.Controllers
{
    public class GamesController : ApiController
    {
        // GET: api/Games
        public IEnumerable<Game> Get()
        {
            var gameRepository = new GameRepository();
            return gameRepository.Retrieve();
        }

        // GET: api/Games/5
        public IEnumerable<Game> Get(int id)
        {
            var gameRepository = new GameRepository();
            var games = gameRepository.Retrieve();
            return games.Where(g => g.Id == id);
        }

        // POST: api/Games
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Games/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Games/5
        public void Delete(int id)
        {
        }
    }
}
