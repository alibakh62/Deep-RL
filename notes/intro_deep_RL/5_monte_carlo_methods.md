# Review
Let's recall the problem at hand. We have an agent and environment. Time is broken into discrete time steps, and at every time step, the agent receives a reward and state from the environment, and chooses an action to perform in response. In this way, the interaction involved is a sequence of states, actions, and rewards. 

In this lesson, we'll confine our attention to episodic tasks where the interaction stops at some time step, ![](https://latex.codecogs.com/gif.latex?T), when the agent encounters a terminal state. We refer to the sequence as an **episode**. For any episode, the agent's goal is to find the optimal policy in order to maximize expected cumulative reward. The agent can only accomplish this by interacting with the environment. 

In this lesson, we'll dig deeply into a class of algorithms that help the agent to understand and leverage this interaction to obtain the optimal policy. 

See the video [here](https://youtu.be/3H5x0lstvmo).

## Review Your Notes
----------
In the lesson  **The RL Framework: The Problem**, you learned how to take a real-world problem and specify it in the language of reinforcement learning. In order to rigorously define a reinforcement learning task, we generally use a  **Markov Decision Process (MDP)**  to model the environment. The MDP specifies the rules that the environment uses to respond to the agent's actions, including how much reward to give to the agent in response to its behavior. The agent's goal is to learn how to play by the rules of the environment, in order to maximize reward.

<p align="center">
<img src="img/review1.png" alt="drawing" width="400"/>
</p>

Next, in the lesson **The RL Framework: The Solution**, you learned how to specify a solution to the reinforcement learning problem. In particular, the **optimal policy** ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cpi_%5Cast) specifies - for each environment state - how the agent should select an action towards its goal of maximizing reward. You learned that the agent could structure its search for an optimal policy by first estimating the **optimal action-value function** ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20q_%5Cast); then, once ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20q_%5Cast) is known, ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cpi_%5Cast) is quickly obtained.

<p align="center">
<img src="img/review2.png" alt="drawing" width="400"/>
</p>

Before continuing with this lesson, please take the time to review your notes, to ensure that the terminology from the previous two lessons is familiar to you. In particular, you should peruse the summary page at the end of the lesson **The RL Framework: The Problem**, and the page at the end of **The RL Framework: The Solution** to ensure that the listed concepts are familiar.

# Gridworld Example
To illustrate the algorithms we'll discuss in this lesson, it'll help if we work with a simple RL task. Say, we have an agent in a world with only four possible states (stone (1), brick (2), wood (3), grass (4)). Say, that at the beginning of an episode, the agent always starts in state (1) and its goal is to reach state (4), which is a terminal state. To add a bit of difficulty, we add a wall separating state (1) from (4). At each time step, the agent can move up, down, left, or right. Let's also say that there is some uncertainty with the movement. Say if the agent decides to move in some direction, it moves in that direction with some _probability_, and ends up in other directions with some other probabilities. And if an agent runs into a wall, it just ends up in the same state where it started. The agent gets the reward of -1 for most of the states, but it lands in state (4), it'll get a reward a of 10. This is to ensure that the goal of the agent is to get to the terminal state as quickly as possible. For simplicity, let's say that the discount rate is 1 (so, basically no discount).   

<p align="center">
<img src="img/gridex1.png" alt="drawing" width="300"/>
</p>

See the video [here](https://youtu.be/Lwibg_IfmrA).

# Monte Carlo Methods
So, following the gridworld example, **how should the agent begin if it initially knows nothing about the environment?**

Probably, the most sensible thing for the agent to do at the beginning when it doesn't know anything is just to behave *randomly* and see what happens.

Let's say when the agent enconuters a new state, it just selects either of four directions with equal probability. _When the agent randomly selects an action in this way, where each action has an equal chance of being selected, we say that it's following the **equiprobable random policy**_.

When the agent starts moving randomly and after some episodes, it has collected some information which is valuable. **How can the agent use it to improve its strategy?**

Remember what we were searching for: **the optimal policy** ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cpi_%5Cast). It tells us for each state which action or actions are most useful towards the goal of maximizing return. So, the question is very simple: **from each state which action is best?** 

Maybe, it makes sense to just pick the action that got the most reward in these episodes that it collected so far. For instance, if in one episode, first action was "up" the final score end up +7, and if "right" the score ends up being +6, then action "up" might be better than action "right" when it's in state one. _This is a useful first step for thinking about how we might be able to estimate the optimal policy from interacting with the environment_. 

It should be noted that to infer any reliable policy, we need to collect hundreds or thousands of episodes for instance. **In fact, this is a fundamental idea behind Monte Carlo methids in general**. Even though the underlying problem involves a great degree of randomness, we can infer information that we can trust, just by collecting a lot of samples. 

See the video [here](https://youtu.be/titaMCRl224).

# MC Prediction, Part 1
Following the gridworld example from previous section, we assumed that the agent used the equiprobable random policy to interact with the environment. The agent collected two episodes, and now the question is: **how exactly should the agent consolidate this information towards its goal of obtaining the optimal policy?**

The real question that we want to ask is: **For each state, which action is the best?**

See the explanation in [this video](https://youtu.be/6ts9gdIS6vg).

<p align="center">
<img src="img/mcpredict2.png" alt="drawing" width="600"/>
</p>

**NOTE:** In summary, the idea is that you'd create a matrix of states vs. actions and fill out the cells based on the score you get choosing the action in a state (if there's more than one instance, just take the average). With limited episodes of this example, it wouldn't give the optimal policy, but it's better than random.

<p align="center">
<img src="img/mcpredict1.png" alt="drawing" width="600"/>
</p>

<p align="center">
<img src="img/mcpredict3.png" alt="drawing" width="600"/>
</p>

## Important Note
----------
In this video, we demonstrated a toy example where the agent collected two episodes, consolidated the information in a table, and then used the table to come up with a better policy. However, as discussed in the previous video, in real-world settings (_and even for the toy example depicted here!_), the agent will want to collect many more episodes, so that it can better trust the information stored in the table. In this video, we use two episodes only to simplify the example.

# MC Prediction, Part 2
So far, we've informally discussed how we might take a bad policy like the equiprobable random policy, use it to collect some episodes and then use those episodes to come up with a better policy. 

Central to this idea, we build a table that stores the return obtained from visiting each state action pair and then this table can be used to obtain a policy that's better than the one we started with.

In practice, this table is an estimate for how much return is likely to follow if the agent starts in a state, selects an action and then the policy to select all future actions. 

See the full explanation in [this video](https://youtu.be/jR49ZyKuJ98).

# MC Prediction, Part 3
So far in this lesson, we have discussed how the agent can take a bad policy, like the equiprobable random policy, use it to collect some episodes, and then consolidate the results to arrive at a better policy.

In the video in the previous concept, you saw that estimating the action-value function with a **Q-table** is an important intermediate step. We also refer to this as the  **prediction problem**.

> **Prediction Problem**: Given a policy, how might the agent estimate the value function for that policy?

We've been specifically interested in the action-value function, but the  **prediction problem**  also refers to approaches that can be used to estimate the state-value function. We refer to Monte Carlo (MC) approaches to the prediction problem as  **MC prediction methods**.

## Pseudocode
----------
As you have learned in the videos, in the algorithm for MC prediction, we begin by collecting many episodes with the policy. Then, we note that each entry in the Q-table corresponds to a particular state and action. To populate an entry, we use the return that followed when the agent was in that state, and chose the action. In the event that the agent has selected the same action many times from the same state, we need only average the returns.

Before we dig into the pseudocode, we note that there are two different versions of MC prediction, depending on how you decide to treat the special case where -  _in a single episode_  - the same action is selected from the same state many times. For more information, watch the [video below](https://youtu.be/9LP6uXdmWxQ).

---> from the video

Before dive into the pseudo code, there's a special case we have to discuss. **What if, in the same episode, we select the same action from a state multiple times?**

For instance, say that at time step 2, we select action "down" from state 3, and say we do the same thing at time step 99. If we count from the first time, then get a return of -87, and if we count from the last time, then we get a return of 10. _When this happens, we have two options and that gives us two different algorithms_. 

We can as a first option, take the average of both time steps on making the table. So, in this case, we'd get a value of -38.5.

Another option that will work well is to just use the first time we tried out the state action combination. In this case, we'd get a value of -87.

We refer to the first option as in **every-visit Monte Carlo method**, and we refer to the second option as **first-visit Monte Carlo method**. 

We define every occurence of a state-action pair in an episode as a **visit** to that state-action pair. _Every-visit MC prediction_ averages the return following every visit to a state-action pair. _First-visit MC prediction_ considers only first visits to the state-action pair and averages those returns. 

These algorithms do yield different behavior, and you can read more about those differences below. 

</--->

As discussed in the video, we define every occurrence of a state in an episode as a  **visit**  to that state-action pair. And, in the event that a state-action pair is visited more than once in an episode, we have two options.

#### Option 1: Every-visit MC Prediction

Average the returns following all visits to each state-action pair, in all episodes.

#### Option 2: First-visit MC Prediction

For each episode, we only consider the first visit to the state-action pair. The pseudocode for this option can be found below.

<p align="center">
<img src="img/pseudocode1.png" alt="drawing" width="600"/>
</p>

<p align="center">
<img src="img/pseudocode2.png" alt="drawing" width="600"/>
</p>

## First-visit or Every-visit?
----------
Both the first-visit and every-visit method are  **guaranteed to converge**  to the true action-value function, as the number of visits to each state-action pair approaches infinity. (_So, in other words, as long as the agent gets enough experience with each state-action pair, the value function estimate will be pretty close to the true value._) In the case of first-visit MC, convergence follows from the  [Law of Large Numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers), and the details are covered in section 5.1 of the  [textbook](http://go.udacity.com/rl-textbook).

If you are interested in learning more about the difference between first-visit and every-visit MC methods, you are encouraged to read Section 3 of  [this paper](http://www-anw.cs.umass.edu/legacy/pubs/1995_96/singh_s_ML96.pdf). The results are summarized in Section 3.6. The authors show:

-   Every-visit MC is  [biased](https://en.wikipedia.org/wiki/Bias_of_an_estimator), whereas first-visit MC is unbiased (see Theorems 6 and 7).
-   Initially, every-visit MC has lower  [mean squared error (MSE)](https://en.wikipedia.org/wiki/Mean_squared_error), but as more episodes are collected, first-visit MC attains better MSE (see Corollary 9a and 10a, and Figure 4).

# OpenAI Gym: BlackJackEnv

In order to master the algorithms discussed in this lesson, you will write code to teach an agent to play Blackjack.

<p align="center">
<img src="img/blackjack1.png" alt="drawing" width="300"/>
</p>

Please read about the game of Blackjack in Example 5.1 of the  [textbook](http://go.udacity.com/rl-textbook).

When you have finished, please review the corresponding  [GitHub file](https://github.com/openai/gym/blob/master/gym/envs/toy_text/blackjack.py), by reading the commented block in the BlackjackEnv class. (_While you do  **not**  need to understand how all of the code works, please read the commented block that explains the dynamics of the environment._) For clarity, we have also pasted the description of the environment below:

```
    """Simple blackjack environment

    Blackjack is a card game where the goal is to obtain cards that sum to as
    near as possible to 21 without going over.  They're playing against a fixed
    dealer.
    Face cards (Jack, Queen, King) have point value 10.
    Aces can either count as 11 or 1, and it's called 'usable' at 11.
    This game is placed with an infinite deck (or with replacement).
    The game starts with each (player and dealer) having one face up and one
    face down card.

    The player can request additional cards (hit=1) until they decide to stop
    (stick=0) or exceed 21 (bust).

    After the player sticks, the dealer reveals their facedown card, and draws
    until their sum is 17 or greater.  If the dealer goes bust the player wins.

    If neither player nor dealer busts, the outcome (win, lose, draw) is
    decided by whose sum is closer to 21.  The reward for winning is +1,
    drawing is 0, and losing is -1.

    The observation of a 3-tuple of: the players current sum,
    the dealer's one showing card (1-10 where 1 is ace),
    and whether or not the player holds a usable ace (0 or 1).

    This environment corresponds to the version of the blackjack problem
    described in Example 5.1 in Reinforcement Learning: An Introduction
    by Sutton and Barto (1998).
    http://incompleteideas.net/sutton/book/the-book.html
    """
```

```python
import gym
from gym import spaces
from gym.utils import seeding

def cmp(a, b):
    return float(a > b) - float(a < b)

# 1 = Ace, 2-10 = Number cards, Jack/Queen/King = 10
deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]


def draw_card(np_random):
    return int(np_random.choice(deck))


def draw_hand(np_random):
    return [draw_card(np_random), draw_card(np_random)]


def usable_ace(hand):  # Does this hand have a usable ace?
    return 1 in hand and sum(hand) + 10 <= 21


def sum_hand(hand):  # Return current hand total
    if usable_ace(hand):
        return sum(hand) + 10
    return sum(hand)


def is_bust(hand):  # Is this hand a bust?
    return sum_hand(hand) > 21


def score(hand):  # What is the score of this hand (0 if bust)
    return 0 if is_bust(hand) else sum_hand(hand)


def is_natural(hand):  # Is this hand a natural blackjack?
    return sorted(hand) == [1, 10]


class BlackjackEnv(gym.Env):
    """Simple blackjack environment
    Blackjack is a card game where the goal is to obtain cards that sum to as
    near as possible to 21 without going over.  They're playing against a fixed
    dealer.
    Face cards (Jack, Queen, King) have point value 10.
    Aces can either count as 11 or 1, and it's called 'usable' at 11.
    This game is placed with an infinite deck (or with replacement).
    The game starts with each (player and dealer) having one face up and one
    face down card.
    The player can request additional cards (hit=1) until they decide to stop
    (stick=0) or exceed 21 (bust).
    After the player sticks, the dealer reveals their facedown card, and draws
    until their sum is 17 or greater.  If the dealer goes bust the player wins.
    If neither player nor dealer busts, the outcome (win, lose, draw) is
    decided by whose sum is closer to 21.  The reward for winning is +1,
    drawing is 0, and losing is -1.
    The observation of a 3-tuple of: the players current sum,
    the dealer's one showing card (1-10 where 1 is ace),
    and whether or not the player holds a usable ace (0 or 1).
    This environment corresponds to the version of the blackjack problem
    described in Example 5.1 in Reinforcement Learning: An Introduction
    by Sutton and Barto.
    http://incompleteideas.net/book/the-book-2nd.html
    """
    def __init__(self, natural=False):
        self.action_space = spaces.Discrete(2)
        self.observation_space = spaces.Tuple((
            spaces.Discrete(32),
            spaces.Discrete(11),
            spaces.Discrete(2)))
        self.seed()

        # Flag to payout 1.5 on a "natural" blackjack win, like casino rules
        # Ref: http://www.bicyclecards.com/how-to-play/blackjack/
        self.natural = natural
        # Start the first game
        self.reset()

    def seed(self, seed=None):
        self.np_random, seed = seeding.np_random(seed)
        return [seed]

    def step(self, action):
        assert self.action_space.contains(action)
        if action:  # hit: add a card to players hand and return
            self.player.append(draw_card(self.np_random))
            if is_bust(self.player):
                done = True
                reward = -1
            else:
                done = False
                reward = 0
        else:  # stick: play out the dealers hand, and score
            done = True
            while sum_hand(self.dealer) < 17:
                self.dealer.append(draw_card(self.np_random))
            reward = cmp(score(self.player), score(self.dealer))
            if self.natural and is_natural(self.player) and reward == 1:
                reward = 1.5
        return self._get_obs(), reward, done, {}

    def _get_obs(self):
        return (sum_hand(self.player), self.dealer[0], usable_ace(self.player))

    def reset(self):
        self.dealer = draw_hand(self.np_random)
        self.player = draw_hand(self.np_random)
        return self._get_obs()
```

Refer to [this notebook](codes/Monte_Carlo_Solution.ipynb) for an implementation.

# Coding Exercise
Please use the next concept to complete the following sections of  `Monte_Carlo.ipynb`:

- Part 0: Explore BlackjackEnv
- Part 1: MC Prediction

To reference the pseudocode while working on the notebook, you are encouraged to look at  [this sheet](https://github.com/udacity/deep-reinforcement-learning/blob/master/cheatsheet/cheatsheet.pdf).

## Important Note
----------
Please do  **_not_**  complete the entire notebook in the next concept - you should only complete  **Part 0**  and  **Part 1**. The final part of the notebook will be addressed later in the lesson.

## Download the Exercise
----------
If you would prefer to work on your own machine, you can download the exercise from the  [DRLND GitHub repository](https://github.com/udacity/deep-reinforcement-learning).

## Check Your Implementation
----------
Once you have completed the exercise, you can check your solution by looking at the corresponding sections in  `Monte_Carlo_Solution.ipynb`. Watch the video below to see a solution walkthrough!

Note that the Jupyter interface will look slightly different, since at one point we experimented with  [JupyterLab](http://jupyterlab.readthedocs.io/en/stable/). However, all of the Python code is the same as you see in [the videos](https://youtu.be/Pwiqk7Pncgc)!

# Greedy Policies
So far, you learned how an agent can take a policy like the _**equiprobable random policy**_, use that to interact with the environment, and then use that experience to populate the corresponding Q-table, and this Q-table is an estimate of that policy's action-value function. 

**So, now the question is how can we use this in our search for an optimal policy?** 

Well, we've already seen that to get a better policy, that's not necessarily (and probably) **not the optimal one**. We need only select for each state the action that maximizes the Q-table. Let's call that new policy ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%7B%5Cpi%20%7D%27). 

**What if we replaced our old policy with this new policy and then estimated its value function and then use that new value function to get a better policy and then continued alternating between these two steps over and over until we got successively better and better policies in the hope that we converge to the optimal policy?**

It turns out that unfortunately, this won't work as it stands now! 

_But we have almost all the tools to make work! There's really just one thing that we have to fix._

When we take a Q-table and use the action that maximizes each row to come up with the policy, we say that we are constructing the policy that's greedy with respect to the Q-table, and that has some special notation: ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%7B%5Cpi%20%7D%27%5Cleftarrow%20greedy%28Q%29).

We'll plug this in to the loop we started with where the only thing that's changed is the notation is a bit fancier. We still begin with a starting policy, estimated its value function, then get a new policy that's greedy with respect to the value function. So, then we have a new policy and so on.

Again, this proposed algorithm is so close to giving us the optimal policy, as long as we run it for long enough. 

But to fix it, we'll need to slightly modify the step or reconstruct the greedy policy. 

See the video [here](https://youtu.be/DH6c-aODMLU).

# Epsilon-Greedy Policies
So, in general, when the agent is interacting with the environment and still trying to figure out what works and what doesn't in its quest to collect as much reward as possible, creating policies are quite dangerous. See why in [this video](https://youtu.be/PxJMtlR06MY) (from 00:15 second).













