# Assignment Overview: Lab 5

There are two parts to your lab assignment, and each is in a different assignment in Canvas:

### First Part: Finish About Me

Put finishing touches on your About Me project and get it deployed. The more time you spend with this, the better you'll get at CSS, but keep in mind that you also have readings to do and need to get some rest and relaxation in as well! The next project we will start is challenging, so be sure to come into it refreshed and ready.

---

### Second Part: Writing Code On Branches

Today in lab you will fork and clone a GitHub repo, and then create solutions to some code problems such that your solutions pass the included tests.

**Be sure to follow instructions carefully.**

To get started on this lab:
1. Fork this repo, and then clone that forked version.
2. Check out a new branch to start working on problem 2 (we already did problem 1 together).
3. Once you've finished that problem, un-comment the test for that problem to ensure that it passes.
4. Add, commit, and push to your problem 2 branch on GitHub.
4. Make a pull request on GitHub and merge those changes into your master branch on GitHub.
5. Check out your master branch on your computer.
6. Pull your master branch from GitHub to your own computer.
7. Go back to step 2, and repeat for the next problem.

The specific git steps required, starting on the master branch:
1. `git checkout -b new-branch-name`
2. edit your code, make the changes needed to solve the problem
3. `git add .`
4. `git commit -m "finished that problem"`
5. `git push origin new-branch-name`
6. On GitHub, make the pull request from `new-branch-name` to `master`. Merge that branch.
7. In your terminal, `git checkout master`
8. `git pull origin master`
9. Repeat from step 1!

Here are a couple of things to keep in mind:

* Place no function calls in your code, unless inside of another function. Everything should be run by hand from the console. This is to give you additional practice using the console and practice efficient app-switching processes.
* Create a new branch for each code problem, and merge each branch into *master* on GitHub (and then pull back into master on your laptop!) when the problem is completed. Do the problems in order. Don't forget to pull the updated master branch from GitHub into your local master branch each time you merge a pull request, then make a new branch from master for the next problem.
* Although this is an individual lab assignment, do feel free to (heck, it is *encouraged* that you) collaborate and work in pairs or groups.

---
### HTML and JS setup
You are being given starter code for today, in the `index.html` and `app.js` files inside of this directory. The success of your code will be determined by whether it passes tests that are in the `tests.js` file. You do not need to do anything with `tests.js`, though you should take a look at it to see how it works.

Submission instructions are in the Canvas assignment.
