﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AMVisualizer.Models;

namespace AMVisualizer.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Graph()
        {
            ViewBag.Data = new int[] { 1,2 };
            return View();
        }

        public IActionResult Graph2()
        {
            return View();
        }

        public IActionResult Test()
        {
            ViewBag.Data = new int[] { 1, 2 };
            return View();
        }

        public IActionResult TestNew()
        {
            ViewBag.Data = new int[] { 1, 2 };
            return View();
        }

        public IActionResult TestLine()
        {
            return View();
        }

        public IActionResult Graph3()
        {
            return View();
        }

        public IActionResult Graph4()
        {
            return View();
        }

        public IActionResult Graph5()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
