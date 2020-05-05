# Motivation
**Actor-Critic methods** are at the intersection of value-based methods such as DQN and policy-based methods such as REINFORCE. 

If a deep RL agent uses a deep neural network to approximate a value function, the agent is said to be **value-based**. If an agent uses a deep neural network to approximate a policy, the agent is said to be **policy-based**.

The DQN agent you learned about, is a value-based agent because it learns about the optimal action value function. This is just one of the many functions you can approximate. You can learn about the state value function `V_{\pi}`, the action value function `Q_{\pi}`, the advantage function `A_{\pi}`, and the optimal versions of these. If your agent learns a value function well, deriving a good policy from it is straight forward. 

The REINFORCE agent previously learned about is a policy-based agent. These agents parametrizes the policy and learns to optimize it directly. The policy is usually stoachastic in this setting. But you can also learn about deterministic policies. 

Remember that stochastic policies, taking a state and returned a probability distribution over the actions. Though what you often see is slightly different notation, in which you taking a state and an action and return the probability of taking that action in that state. But, they're pretty much the same though. Given the same state, the policy could prescribe a different action. This policy is stochastic. 

Deterministic policies on the other hand, prescribe a single action for any given state. So, they take in a state and return an action. There's no stochasticity. The policy is deterministic.

Finally, you also learned about using baselines to reduce the variance of policy-based agents. **Did you notice that you can use a value function as a baseline?**

So, think about it. If we train a neural network to approximate a value function and then use it as a baseline, would this make for a better baseline? And if so, would a better baseline further reduce the variance of policy-based methods? 

Indeed. **In fact, that's basically all actor-critic methods are trying to do, to use value-based techniques to further reduce the variance of policy-based methods. 

See the video [here](https://youtu.be/dpFPlDtdxyQ).

# Bias vs. Variance
In machine learning, we're often presented there with a tradeoof between bias and variance. Let's talk about some intuition first.

Let's say you're practicing your soccer shooting skills. The thing you want to do is to put the ball in the top right corner of the goal. You want to be able to repeatedly kicked the ball there. If after a day of training, you place the ball most of the time in the middle right, this means that you have a bias to shoot the ball lower. If also means that you have low variance because the shots where clumped together. Now, say the average of your shots were center on the top right corner, but most of your shots were spread around that spot. Then, you have low bias because you were mostly center where you were aiming in high variance because of the spread. 

Obviously, you want to avoid both high bias and high variance, and you want to have both low bias and low variance. The thing is, this is very hard to achieve, but we'll look at several techniques that are designed to accomplish this. 

We have to consider the bias-variance tradeoff in RL, when an agent tries to estimate value functions or policies from returns. 

A return is calculated using a single trajectory. However, value functions which is what we're trying to estimate are calculated using the expectation of returns. 

A big part of the effort in RL and research is an attempt to reduce the variance of algorithms while keeping bias to a minimum. 

You know by now that a RL agent tries to find policies to maximize the total expected reward. But since we're limited to sampling the environment, we can only estimate these expectation. **The question is, what's the best way to estimate value functions for our actor-critic methods.**

See the video [here](https://youtu.be/_vnkkwm46uU).

# Two Ways For Estimating Expected Returns
Let's explore two very distinct and complimentary ways for estimating expected returns. On the one hand, you'd have the **Monte-Carlo estimate.** 

The **Monte-Carlo estimate** consists of rolling out an episode in calculating the discounted total reward from the rewards sequence. For example, in an episode A, you state in state `S_t`, take action `A_t`. The environment then transitions and gives you a reward `R_{t+1}` and sends you to a new state `S_{t+1}`. Then, you continue with a new action `A_{t+1}` and so on until you reach the end of the episode. 

The **Monte-Carlo estimate** just adds all the rewards up, whether discounted or not. When you then have a collection of episodes A, B, C, and D, some of those episodes will have trajectories that go through the same states. Each of these states episodes can give you a different Monte-Carlo estimate for the same value function. 

To calculate the value function, all you need to do is average the estimates.

<p align="center">
<img src="img/actor-critic0.png" alt="drawing" width="750"/>
</p>

Obviously, the more estimates you have when taking the average, the better your value function will be. 

On the other hand, you have the **temporal difference** or **TD estimate**. Say, we're estimating a state value function `V`. For estimating the value of the current state, it uses a single reward sample. In an estimate of the discounted total return, the agent will obtain from the next state onwards. So, you're estimating with an estimate. 

<p align="center">
<img src="img/actor-critic1.png" alt="drawing" width="750"/>
</p>

For example, in episode A, you start in state `S_t`, take action `A_t`, the environment then transitions and gives you a reward `R_{t+1}`, and sends you to a new state `S_{t+1}`. But, then you can actually stop there. By the magic of **dynamic programming**, you're allowed to do what is called **bootstrapping**, which basically means that you can leverage the esimtate you're currently have for for the next state in order to calculate a new estimate for the value function of the current state. 

Now, the estimates of the next state will probably be off, particularly early on, but that value will become better and better as your agenct sees more data, making it turn other values better, clever right?

After doing this many many times, you will have estimated desired value function well. As you can imagine, Monte-Carlo estimates will have high variance because estimates for a state can vary greatly across episodes. `G_{t,A}` here could be -100, while `G_{t,B}` could be +100, and `G_{t,C}` could be +1000. 

The **reason** these high variance is likely, is because you are compounding lots of random events that happened during the course of a single episode. But Monte-Carlo methods are unbiased. You are not estimating using estimates. You're only using the true rewards you obtained. So, given lots and lots of data, your estimates will be accurate. 

<p align="center">
<img src="img/actor-critic2.png" alt="drawing" width="750"/>
</p>

**TD estimates** are low variance because you're only compounding a single time step of randomness instead of a full rollout. Though because you're bootstrapping on the next state estimates and those are not true values, you're adding bias into your calculations. Your agent will learn faster, but we'll have more problem converging. 

See the video [here](https://youtu.be/2W6yIBDvfsQ).

# Baselines and Critics
**You now know that the Monte-Carlo estimate is unbiased but has high variance, and that the TD estimate has low variance but it is biased.**

What are these facts good for?

We you studies REINFORCE, you learned that the return `G` was calculated as the total discounted return. This way of calculating `G`, which is simply a Monte-Carlo estimate, has high variance. You then use a baseline to reduce the variance of the REINFORCE algorithm. However, this baseline was also calculated using a Monte-Carlo approach. 

Let's now assume you use deep learning to learn this baseline. Even if you still use the Monte-Carlo approach which has high variance, using function approximation still gives you an advantage. Namely, you now gain the power of generalization. That means when you encounter a new state `S'`, whether you had visitor or not, your deep neural network will potentially come up with better estimates, since it's been trained to generalize from similar data. 

Note that at this point, we're still not using a critic even though we are using function approximation. This might be confusing as the literature is often not consistent. They recall a Monte-Carlo estimate has high variance and no bias, and that the TD esimtate has low variance but is biased. 

Now, the word **critic** implies that bias has been introduced and the Monte-Carlo estimate is unbiased. If instead of using Monte-Carlo estimates to train baselines, we used TD estimates, then we can say we have a critic. 

Sure, we will be introducing bias but we will be reducing variance thus improving our convergence properties and speeding up learning. 

In **actor-critic methods**, all we are trying to do is to continue to reduce the high-variance commonly associated with policy-based agents. By using a TD critic instead of a Monte-Carlo baseline, we further reduce the variance of policy-based methods. This leads to faster learning than policy-based agents alone and we also see better and more consistent convergence than value-based agents alone. 

See the video [here](https://youtu.be/wqmqoiUuQHI).

The argument you often hear as to why to call a neural network trained with Monte-Carlo estimates a "Critic" is because function approximators, such as a neural network, are biased as a byproduct that they are not perfect. That's a fair point, though, I prefer the distinction based on whether we pick a Monte-Carlo or a TD estimate to train our function approximator. Now, definitely we should not be calling Actor-Critic methods every method that uses 2 neural networks. You'll be surprised!

The important takeaway for you, though, is that there are inconsistencies out there. You often see methods named "Actor-Critic" when they are not. I just want to bring the issue to your attention.

