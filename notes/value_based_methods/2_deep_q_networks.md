# From RL to Deep RL

So far, you've solved many of your own reinforcement learning problems, using solution methods that represent the action values in a small table. Earlier in the nanodegree, we referred to this table as a  **Q-table**.

In the video below,  **Kelvin Lwin**  will introduce you to the idea of using neural networks to expand the size of the problems that we can solve with reinforcement learning. This context is useful preparation for exploring the details behind the Deep Q-Learning algorithm later in this lesson!

_Kelvin is a Senior Deep Learning Instructor at the  [NVIDIA Deep Learning Institute](https://www.nvidia.com/en-us/deep-learning-ai/education)._

RL is a branch of machine learning where an agent outputs an action and the environment returns an observation or the state of the system and a reward. 

The **goal of an agent** is to best determine the best action to take. Usually, RL is described in terms of this agent interacting with the previously unknown environment, trying to maximize the overall or total reward. Now then, **what is Deep RL?**

In some sense, it is using nonlinear function approximators to calculate the value actions based directly on observations from the environment. We represented it as a **Deep Neural Network**. We then deep learning to find the optimal parameters for these function approximators. 

You have already worked with some deep learning neural networks for classification, detection, and semantic segmentation. However, these deep learning applications use labeled training data for supervised learning. The inference engine then produces the best guess label, not an action, as the output. 

When an RL agent handles the entire end-to-end pipeline, it's called **pixels-to-action**, referring to the network's ability to take raw sensor data and choose the action it thinks will best maximize its reward. 

Overtime, RL agents have a uncanny knack for developing intuitive human-like behaviors like learning to walk or peeking behind corners when they're unsure. They naturally incorporate elements of exploration and knowledge gathering, which makes them good for imitating behaviors and performing path planning. 

Robots operating in unstructured environments tend to greatly benefit from RL agents, which gives them a way to make sense of the environment, which can be hard to model in advance. 

See the video [here](https://youtu.be/7HLJ0uaR1F0).

As you'll learn in this lesson, the Deep Q-Learning algorithm represents the optimal action-value function ![](https://latex.codecogs.com/gif.latex?q_%5Cast) as a neural network (instead of a table).

Unfortunately, reinforcement learning is  [notoriously unstable](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.73.3097&rep=rep1&type=pdf)  when neural networks are used to represent the action values. In this lesson, you'll learn all about the Deep Q-Learning algorithm, which addressed these instabilities by using  **two key features**:

-   Experience Replay
-   Fixed Q-Targets

The **Deep Q-Network (DQN) algorithm** has caused a lot of buzz around deep RL since 2013. It's more or less an online version of a neural fitted value iteration paper from 2005 by Reed Miller and Martin, which introduced training of Q value function represented by a multilayer perceptron.

There are a few very useful additions and tweaks though in DQN. 

- The first addition is the use of a rolling history of the past data via **replay pool**. By using the replay pool, the behavior distribution is averaged over many of its previous states, smoothing out learning and avoiding oscillations. The has the **advantage** that each step of the experience is potentially used in many weight updates. 

- The other big idea is the use of a target network to represent the old Q function, which will be used to compute the loss of every action during training. **Why not use a single network?** Well, the issue is that at each step of training, the Q function's values change and then the value estimates can easily spiral out of control.

These additions enable RL agents to **converge more reliably during training**.

See the video [here](https://youtu.be/WgiAvr7COR0).

## Additional References

-   Riedmiller, Martin. "Neural fitted Q iteration–first experiences with a data efficient neural reinforcement learning method." European Conference on Machine Learning. Springer, Berlin, Heidelberg, 2005.  [http://ml.informatik.uni-freiburg.de/former/_media/publications/rieecml05.pdf](http://ml.informatik.uni-freiburg.de/former/_media/publications/rieecml05.pdf)
    
-   Mnih, Volodymyr, et al. "Human-level control through deep reinforcement learning." Nature518.7540 (2015): 529.  [http://www.davidqiu.com:8888/research/nature14236.pdf](http://www.davidqiu.com:8888/research/nature14236.pdf)


# Deep Q-Network
In the video below, Arpan will tell you all about how DeepMind leveraged a **Deep Q-Network (DQN)** to build the Deep Q-Learning algorithm that learned to play many Atari video games better than humans.

In 2015, DeepMind made a breakthrough by designing an agent that learned to play video games better than humans. It's probably easy to write a program that plays pong perfectly if you have access to the underlying game state, position of the ball, paddles, etc. But this agent was only given raw pixel data, what a human player would see on screen. It learned to play a bunch of different Atari games, all from scratch. They called this agent a **Deep Q Network**. Let's see how it works.

True to its name, at the heart of the agent is a deep neural network that acts as a function approximator. You pass in images from your favorite video game one screen at a time, and it produces a vector of action values, with the max value indicating the action to take. 

As a RL signal, it is fed back the change in game score at each time step. In the beginning when the neural network is initialized with random values, the actions taken are all over the place. 

Over time it begins to associate situations and sequences in the game with appropriate actions and learns to actually play the game well. 

Consider how complex the input space is. Atari games are displayed at a resolution of 210x160 pixles, with 128 possible colors for each pixel. **This is still technically a discrete state space but very large to process as is**.

**To reduce complexity,** the DeepMind team decided to perform some minimal processing, convert the frames to grayscale, and scale them down to a square 84x84 pixel block. Square images allowed them to use more optimized neural network operations on GPUs. 

In order to give agent access to a sequence of frames, they stacked four such frames together resulting in a final state space size of 84x84x4. 

There might be other approaches to dealing with sequential data but this was a simple approach that seemed to work pretty well. 

On the output side, unlike a traditional RL setup where only one Q value is produced at a time, the Deep Q Network is designed to produce a Q value for every possible action in a single forward pass. Without this, you would have to run the network individually for every action. Instead, you can now simply use this vector to take an action, either stochastically, or by choosing the one with the maximum value. 

These innovative input and output transformations support a powerful yet simple neural network architecture undeer the hood. The screen images are first processed by convolutional layers. This allows the system to exploit spatial relationships, and can exploit spatial rule space. 

Also, since four frames are stacked and provided as input, these convolutional layers also extract some temporal properties across those frames. 

The original DQN agent used three such convolutional layers with relu activation. There were followed by one fully-connected hidden layer with relu activation, and one fully connected linear output that produced the vector of action values. 

<p align="center">
<img src="img/dqn1.png" alt="drawing" width="700"/>
</p>

This same architecture was used for all Atari games they tested on, but each game was learned from scratch with a freshly initialized network. 

Training such a network requires a lot of data, but even then, it is not guaranteed to converge on the optimal value function. In fact, there are situations where the network weights can oscillate or diverge, due to the high correlation between actions and states. This can result in a very unstable and ineffective policy.

In order to overcome these challenges, the researchers came up with several techniques that slightly modified the base Q-learning algorithm. We'll take a look at two of those techniques (which are the most important ones):

- **Experience Replay**
- **Fixed Q Targets**

See the video [here](https://youtu.be/GgtR_d1OB-M).

# Experience Replay
The idea of experience replay and its application to training neural networks for RL isn't new. It was originally proposed to make more efficient use of observed experiences. Consider the basic online Q-learning algorithm where we interact with the environment and at each time step, we obtain a tuple like this: ![](https://latex.codecogs.com/gif.latex?%5Cleft%20%5Clangle%20S_t%2C%20A_t%2C%20R_%7Bt&plus;1%7D%2C%20S_%7Bt&plus;1%7D%20%5Cright%20%5Crangle), learn from it and then discarded, moving on to the next tuple in the following timestep. 

This seems a little wasteful. We could possibly learn more from these experienced tuples if we stored them somewhere. 

Moreover, some states are pretty rare to come by and some actions can be pretty costly. So, it'd be nice to recall such experiences. 

That is exactly what a **replay buffer** allows us to do. We store each experienced tuple in this buffer as we are interacting with the environment and then sample a small batch of tuples from it in order to learn. 

As a result, we are able to learn from individual tuples multiple times, recall rare occurences, and in general make better use of our experience. 

But there is another critical problem that experience replay can help with and this is what DQN takes advantage of. If you think about the experiences being obtained, you realize that every action ![](https://latex.codecogs.com/gif.latex?A_t) affects the next state ![](https://latex.codecogs.com/gif.latex?S_t) in some way, which means that a sequence of experienced tuples can be highly correlated. 

A naive Q-learning approach that learns from each of these experiences in sequential order runs the risk of getting swayed by the effects of this correlation. 

With **experience replay**, we can sample from this buffer at random. It doesn't have to be in the same sequence as we stored the tuples. This helps break the correlation and ultimately prevents action values from oscillating or diverging catastrophically. 

Let's look at an example for better understanding ([this video](https://youtu.be/wX_-SZG-YMQ) from minute 2:00).

If you think about it, this approach is basically building a database of samples and then learning a mapping from them. In that sense, **experience replay helps us reduce the RL problem or at least the value learning portion of it to a supervised learning scenario**. We can then apply other models learning techniques and best practices developed in the supervised learning literature through the RL. We can even improve upon this idea, for example, by prioritizing experience tuples that are rare or more important. 

See the video [here](https://youtu.be/wX_-SZG-YMQ).

## Summary
When the agent interacts with the environment, the sequence of experience tuples can be highly correlated. The naive Q-learning algorithm that learns from each of these experience tuples in sequential order runs the risk of getting swayed by the effects of this correlation. By instead keeping track of a  **replay buffer**  and using  **experience replay**  to sample from the buffer at random, we can prevent action values from oscillating or diverging catastrophically.

The  **replay buffer**  contains a collection of experience tuples ![](https://latex.codecogs.com/gif.latex?%28S%2C%20A%2C%20R%2C%20%7BS%7D%27%29). The tuples are gradually added to the buffer as we are interacting with the environment.

The act of sampling a small batch of tuples from the replay buffer in order to learn is known as  **experience replay**. In addition to breaking harmful correlations, experience replay allows us to learn more from individual tuples multiple times, recall rare occurrences, and in general make better use of our experience.










