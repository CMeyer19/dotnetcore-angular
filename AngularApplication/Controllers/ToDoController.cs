using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class ToDoController : ControllerBase
    {
        private List<Todo> TodoItems = new List<Todo>
            {new Todo {IsCompleted = true, Title = "Hello"}, new Todo {IsCompleted = false, Title = "HelloAgain"}};

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Todo>> Get()
        {
            return TodoItems;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public Todo Post([FromBody] Todo todo)
        {
            TodoItems.Add(todo);
            return todo;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
