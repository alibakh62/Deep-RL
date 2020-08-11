# The Environment

For this project, you will work with the  [Tennis](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Learning-Environment-Examples.md#tennis)  environment.

![Unity ML-Agents Tennis Environment](https://video.udacity-data.com/topher/2018/May/5af7955a_tennis/tennis.png)

Unity ML-Agents Tennis Environment

In this environment, two agents control rackets to bounce a ball over a net. If an agent hits the ball over the net, it receives a reward of +0.1. If an agent lets a ball hit the ground or hits the ball out of bounds, it receives a reward of -0.01. Thus, the goal of each agent is to keep the ball in play.

The observation space consists of 8 variables corresponding to the position and velocity of the ball and racket. Each agent receives its own, local observation. Two continuous actions are available, corresponding to movement toward (or away from) the net, and jumping.

The task is episodic, and in order to solve the environment, your agents must get an average score of +0.5 (over 100 consecutive episodes, after taking the maximum over both agents). Specifically,

-   After each episode, we add up the rewards that each agent received (without discounting), to get a score for each agent. This yields 2 (potentially different) scores. We then take the maximum of these 2 scores.
-   This yields a single  **score**  for each episode.

The environment is considered solved, when the average (over 100 episodes) of those  **scores**  is at least +0.5.

## Note

----------

The project environment is similar to, but  **not identical to**  the Tennis environment on the  [Unity ML-Agents GitHub page](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Learning-Environment-Examples.md).

> You are  **required**  to work with the environment that we will provide as part of the project.

In particular, your project submission should  **not**  use the environment on the ML-Agents GitHub page.

# The Environment

Follow the instructions below to explore the environment on your own machine! You will also learn how to use the Python API to control your agent.

## Step 1: Activate the Environment

----------

If you haven't already, please follow the  [instructions in the DRLND GitHub repository](https://github.com/udacity/deep-reinforcement-learning#dependencies)  to set up your Python environment. These instructions can be found in  `README.md`  at the root of the repository. By following these instructions, you will install PyTorch, the ML-Agents toolkit, and a few more Python packages required to complete the project.

(_For Windows users_) The ML-Agents toolkit supports Windows 10. While it might be possible to run the ML-Agents toolkit using other versions of Windows, it has not been tested on other versions. Furthermore, the ML-Agents toolkit has not been tested on a Windows VM such as Bootcamp or Parallels.

> **SPECIAL NOTE TO BETA TESTERS**  - please also download the  `p3_collab-compet`  folder from  [here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/tmp/p3_collab-compet.zip)  and place it in the DRLND GitHub repository.

## Step 2: Download the Unity Environment

----------

For this project, you will  **not**  need to install Unity - this is because we have already built the environment for you, and you can download it from one of the links below. You need only select the environment that matches your operating system:

-   Linux:  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Linux.zip)
-   Mac OSX:  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis.app.zip)
-   Windows (32-bit):  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Windows_x86.zip)
-   Windows (64-bit):  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Windows_x86_64.zip)

Then, place the file in the  `p3_collab-compet/`  folder in the DRLND GitHub repository, and unzip (or decompress) the file.

(_For Windows users_) Check out  [this link](https://support.microsoft.com/en-us/help/827218/how-to-determine-whether-a-computer-is-running-a-32-bit-version-or-64)  if you need help with determining if your computer is running a 32-bit version or 64-bit version of the Windows operating system.

(_For AWS_) If you'd like to train the agent on AWS (and have not  [enabled a virtual screen](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Training-on-Amazon-Web-Service.md)), then please use  [this link](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Linux_NoVis.zip)  to obtain the "headless" version of the environment. You will  **not**  be able to watch the agent without enabling a virtual screen, but you will be able to train the agent. (_To watch the agent, you should follow the instructions to  [enable a virtual screen](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Training-on-Amazon-Web-Service.md), and then download the environment for the  **Linux**  operating system above._)

## Step 3: Explore the Environment

----------

After you have followed the instructions above, open  `Tennis.ipynb`  (located in the  `p3_collab-compet/`  folder in the DRLND GitHub repository) and follow the instructions to learn how to use the Python API to control the agent.

Watch the (_silent_) video below to see what kind of output to expect from the notebook, if everything is working properly!

Watch [this video](https://youtu.be/kxDvrkg8ep0).

In the last code cell of the notebook, you'll learn how to design and observe an agent that always selects random actions at each timestep. Your goal in this project is to create an agent that performs much better!

## (Optional) Build your Own Environment

----------

For this project, we have built the Unity environment for you, and you must use the environment files that we have provided.

If you are interested in learning to build your own Unity environments  **after completing the project**, you are encouraged to follow the instructions  [here](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Getting-Started-with-Balance-Ball.md), which walk you through all of the details of building an environment from a Unity scene.

# Project Instructions

For this project, you will train an agent to solve the provided environment.

To submit the project, you will provide a link to a GitHub repository with your implementation. If you would like a refresher on GitHub, please check out the lessons on GitHub in the extracurricular content.

To review the detailed project requirements, please read the  [project rubric](https://review.udacity.com/#!/rubrics/1891/view).

The format of this project is largely open-ended; you need only satisfy the points in the rubric. For instance, while we suspect that the majority of students will train the agent in a Jupyter notebook, you are welcome to instead structure your repository so that your Python code is run from the command line instead.

## Your GitHub Submission

----------

As described in the rubric, your GitHub submission should contain:

-   a  **README**  that describes how someone not familiar with this project should use your repository. The README should be designed for a general audience that may not be familiar with the Nanodegree program; you should describe the environment that you solved, along with how to install the requirements before running the code in your repository.
-   the  **code**  that you use for training the agent, along with the trained model weights.
-   a  **report**  describing your learning algorithm. This is where you will describe the details of your implementation, along with ideas for future work.

This GitHub repository will serve as a portfolio piece to share your new skills with the global community of reinforcement learning students and practitioners, along with potential employers!

## Project Workspace

----------

While you are welcome to train the agent locally on your own machine, you can also complete the project in the  **Workspace**  that appears towards the end of this lesson. Note that the Workspace does not allow you to see the simulator of the environment; so, if you want to watch the agent while it is training, you should train locally.

The Workspace provides a Jupyter server directly in your browser and has GPU support. You can learn more about the Workspace by perusing the  **Udacity Workspaces**  lesson in the extracurricular content.

# Benchmark Implementation

For this project, you can use any algorithm of your choosing to solve the task. You are strongly encouraged to do your own research, to devise your own approach towards solving this problem.

## Some Hints

----------

Since you're well on your way to mastering deep reinforcement learning, we won't provide too many hints for this project. That said, in our solution code, we decided to start with the DDPG code to solve this project. To adapt it to train multiple agents, we first noted that  **each agent receives its own, local observation**. Thus, we can easily adapt the code to simultaneously train both agents through self-play. In our case, each agent used the same actor network to select actions, and the experience was added to a shared replay buffer.

But we'll leave the rest of the details up to you to discover! :)

![You can do it! (picture of Rosie the Riveter)](https://video.udacity-data.com/topher/2018/August/5b75bf5a_we-can-do-it-poster-1393770492mjo/we-can-do-it-poster-1393770492mjo.jpg)

You can do it!

## Note

----------

Note that due to the multi-agent nature of this problem, you are likely to experience a bit of instability during training. For instance, we have plotted the scores plot from the solution code below. The blue line shows the maximum score over both agents, for each episode, and the orange line shows the average score (after taking the maximum over both agents) over the next 100 episodes.

Note that the agents perform horribly starting around episode 2500 and show no evidence of recovery. However, at one point, we accomplished an average score (over 100 episodes) of +0.9148!

![Scores plot from the solution code.](https://video.udacity-data.com/topher/2018/August/5b75ef77_screen-shot-2018-08-16-at-4.37.07-pm/screen-shot-2018-08-16-at-4.37.07-pm.png)

Scores plot from the solution code.

# (Optional) Challenge: Play Soccer

After you have successfully completed the project, you might like to solve a more difficult environment, where the goal is to train a small team of agents to play soccer.

You can read more about this environment in the ML-Agents GitHub  [here](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Learning-Environment-Examples.md).

![ML-Agents Soccer Environment](https://video.udacity-data.com/topher/2018/August/5b81cd05_soccer/soccer.png)

ML-Agents Soccer Environment

## Download the Unity Environment

----------

To solve this harder task, you'll need to download a new Unity environment. You need only select the environment that matches your operating system:

-   Linux:  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Soccer/Soccer_Linux.zip)
-   Mac OSX:  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Soccer/Soccer.app.zip)
-   Windows (32-bit):  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Soccer/Soccer_Windows_x86.zip)
-   Windows (64-bit):  [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Soccer/Soccer_Windows_x86_64.zip)

Then, place the file in the  `p3_collab-compet/`  folder in the DRLND GitHub repository, and unzip (or decompress) the file.

> Please do not submit a project with this new environment. You are  **required**  to complete the project with the Tennis environment that was provided earlier in this lesson, in  **The Environment - Explore**.

(_For AWS_) If you'd like to train the agents on AWS (and have not  [enabled a virtual screen](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Training-on-Amazon-Web-Service.md)), then please use  [this link](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Soccer/Soccer_Linux_NoVis.zip)  to obtain the "headless" version of the environment. You will  **not**  be able to watch the agents without enabling a virtual screen, but you will be able to train the agents. (_To watch the agents, you should follow the instructions to  [enable a virtual screen](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Training-on-Amazon-Web-Service.md), and then download the environment for the  **Linux**  operating system above._)

## Explore the Environment

----------

After you have followed the instructions above, open  `Soccer.ipynb`  (located in the  `p3_collab-compet/`  folder in the DRLND GitHub repository) and follow the instructions to learn how to use the Python API to control the agent.

