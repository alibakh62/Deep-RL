# Introduction
In this lesson, you'll learn about **Temporal Difference** or **TD Learning**. In order to understand TD learning, it'll help to discuss what exactly it would mean to solve this problem of learning from interaction. The solution will come many years into the future, when we've developed artificially intelligent agents that interact with the world much like the way humans do.

In order to accomplish this, the agents would need to learn from the kind of online streaming data that we learn from everyday. Real life is far from an episodic task and it requires its agents to constantly make decisions all day everyday. We get no break with our interaction with the world. 

Remember that Monte Carlo learning needed those breaks, it needed the episode to end so that the return could be calculated, and then used as an estimate for the action values. 

So, we'll need to come up with something else if we want to deal with more realistic learning in a real world setting. So, the _**main idea**_ is this: **if an agent is playing chess, instead of waiting until the end of an episode to see if it's won the game or not, it will at every move be able to _estimate the probability_ that it's winning the game, or a self-driving car at every turn will be able to estimate if it's likely to crash, and if necessary amend its strategy to avoid disaster.** To emphasize, the Monte Carlo approach would have this car crash every time it wants to learn anything, and this is too expensive and also quite dangerous.

**TD learning** will solve these problems. Instead of waiting to update values when the interaction ends, it will amend its predictions at every step, and you'll be able to use it to solve both continuous and episodic tasks. It's also widely used in RL and lies at the heart of many state-of-the-art algorithms that you see in the news today. 

See the video [here](https://youtu.be/yXErXQulI_o).

This lesson covers material in **Chapter 6** (especially 6.1-6.6) of the [textbook](http://go.udacity.com/rl-textbook).

# Review: MC Control Methods
In the previous lesson, you learned about the  **control problem**  in reinforcement learning and implemented some Monte Carlo (MC) control methods.

> **Control Problem**: Estimate the optimal policy.

In this lesson, you will learn several techniques for Temporal-Difference (TD) control.

## Review
Before continuing, please review  **Constant-alpha MC Control**  from the previous lesson.

Remember that the constant-\alphaα  MC control algorithm alternates between  **policy evaluation**  and  **policy improvement**  steps to recover the optimal policy ![](https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cdpi%7B120%7D%20%5Cpi_%5Cast). 

<p align="center">
<img src="img/review-mc-1.png" alt="drawing" width="500"/>
</p>

<p align="center">
<img src="img/review-mc-2.png" alt="drawing" width="700"/>
</p>

# TD Control: Sarsa
Monte Carlo (MC) control methods require us to complete an entire episode of interaction before updating the Q-table. Temporal Difference (TD) methods will instead update the Q-table after every time step.

We'll discuss an algorithm that doesn't need us to complete an entire episode before updating the Q-table. Instead, we'll update the Q-table at the same time as the episode is unfolding. In particular, we'll only need this very small time window of information to do an update.

Let's consider the gridworld example again.

