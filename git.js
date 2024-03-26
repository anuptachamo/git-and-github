/**
 *  ? What is Git?
 *      Free and Open version control system [tools that help to tracks chnages in code]
 * 
 *  ? What is Github?
 *      Website where we host repositories online
 * 
 *  ?Now, first install github and open terminal
 *      - git version (to check git version)
 *      - git --version
 */

/**
 *  ? How to clone a repository on our local machine
 *      -git clone https://github.com/anuptachamo/allAboutBootstrap.git <- this is https link ->
 */

/**
 *  ? 1. how to set first time config in Git
        - git config --global user.name "Your Name"
        - git config --global user.email "youremail@example.com"
 */

/**
 *  ? 2. How to push code in a github
        - git init (used to create a new git repo)
        - git status (display the status of the code)
        - git add . (adds new or changed files in your working directory to the Git staging area)
        - git ls (show list files)
        - git ls -a (show hidden files)
        - git commit -m "Your commit message here" (it is the record of change)
        - git remote add origin https://github.com/yourusername/your-repo.git
        - git remote -v (to verify remote) 
        - git push -u origin main (upload local repo content to remote repo)
 */

/**
 *  ? 3. how to check in which branch you are:
        - git branch
        - git branch -M main [to rename branch]
 */

/**
 *  ? 4. how to add new branch and delete
        - git checkout <- branch name->    (to navigate)
        - git checkout -b <- new branch name-> (to create new branch)
        - git branch -d <- branch name->   (to delete branch)

        for example i am creating a new branch name called feature1
        you needed to follow these steps:
            - git checkout -b feature1 (new branch will be created)
            - git branch (to check in which branch you are)
            - git checkout main (this will change to main branch)
            - git push origin feature1 (this will push the code to the feature1 branch )
 */

/**
 *  ? 5. how to merging Code
        way 1
        - git diff <- branch name -> (to compare commits, branches, files and more)
        - git merge <- branch name -> (to merge 2 branches)

        way 2
        - create a PR(pull request)
 */

/**
 *  ? 6. Pull Command
	Let guess you have a two branched main and feature1,
	- now check in which branch you are, if u are in feature1 branch change the branch first to pull it on main branch.(git checkout main[this will switched to main branch])
	- then, git pull origin main
 */

/**
 *  ?7. Resolving Merge Conflicts
	- An event that takes place when Git is unable to automatically resolve differences in code between two commits.

	- Now let take a example again, i do had two branches main and feature1
		In index.html file of same line i do had changed
		for example:
			- In feature1 branch
				<p>This is a new features (hello)</p>   (This is in index.html file of same line)
			- to changed it you needed to do git add . , and commit -m "comment"

			- In main branch
				<p>This is a new features (world)</p>   (This is in index.html file of same line)
			- Same here also, to changed it you needed to do git add . , and commit -m "comment"
 */


/**
 *  ? 8. Undoing Changes
        Case 1: staged changes (git ma add gari sakeko buut commit na gareko case ma matra use hunxa)
            - git reset <- file name -> (git reset index.html le euta matra file ma change hunxa)
            - git reset (git reset le sabaii reset gardinxa)

        Case 2: commited changes (for one commit)
            - git rest HEAD~1
        
        Case 3 : commited changes (for many commits)
            - git reset <-commit hash ->
            - git reset --hard <-commit hash->
 */