ECON 321
========

Lecture 1
---------

### Estimating \\(\beta\\)
$$ \beta + \frac{1}{X_1} E[u_1 | X_1] $$

$$ var[b | X_1 ] = \frac{1}{X_1^2} var [u_1 | X_1] $$
$$ var[kz] = k^2 var[z] $$

* \\( X_1 \\) is a scale factor
* Estimation is more squashed around the true value -- small \\(X_1\\)

Conditional expectation = Mean (think bi modal binary distribution +1 -1)

Small contional variance by moving it out to the right - lines above below, angles shrink as \\(X_1\\) increases on \\(Y\\) against \\(X\\) graph

### Suppose:
- a. \\(u_1\\) & \\(X_1\\) are independent
- b. \\(E[u_1]\\) = 0
- a & b => \\(E[u_1 | X_1]\\) = 0

$$ Y_1 = \beta X_1 + u_1 $$
$$ and E[Y_1] = \beta E[X_1] $$
$$ b = Y_1/X_1 = \beta + \frac{u_1}{X_1} $$
$$ E[b] = \beta + E\left[\frac{u_1}{X_1}\right] = \beta $$

> Be careful about that expectation
> * Expectation of two random variables
> * Two standard normal random variables division
>     * Well known, but expectation is infinite

> If we replace a) assumption with 
> a') \\(X_1\\) is non stochastic 
>  * science lab chooses variables before hand
>  * Writing equation doesn't imply causallity
>  * Effectively conditionals hold X_1 fixed and thus non random
>  * a' is essentially easier, but the same (similar arguments)

$$ E[Y_1] = \beta X_1 + E[u_1] $$

* There's nothing random about \\( \beta X_1 \\)

$$ \frac{\partial E[Y_1]}{\partial X_1} = \beta $$

$$ b = \frac{Y_1}{X_1} $$
$$ \begin{aligned} E[b] &= E[\frac{Y_1}{X_1}] = \frac{1}{X_1 E[Y_1]} \\\\
      &= \beta + \frac{E[u_1]}{X_1} \\\\
      &= \beta \end{aligned} $$



* Only valid if \\(X_1 \neq 0\\)
* Basically \\(Y_1 = \beta X_1 + u_1\\) can't find \\(\beta\\)

$$ var[b] = \frac{var[u_1]}{X_1^2} $$

$$ b = \beta + \frac{u_1}{X_1} $$
$$ \begin{aligned} var[b] &= var\left[\frac{u_1}{X_1}\right] \\\\
      &= \frac{1}{x_1^2} var[u_1] \end{aligned}$$


Lecture 2
---------

$$ b = \frac{\sum\limits_{_{}i=1}^{2} X_iY_i}{\sum^2_i=1 X_i^2} = \beta + \frac{\sum X_i u_i}{\sum X_i^2} $$
$$ E[b] = \beta $$
since 
$$ \beta + E\left[\frac{\sum X_i u_i}{\sum X_i^2}\right] $$
$$ \beta +\frac{1}{\sum X_i^2} E[X_1u_1 + X_2 u_2] $$
$$ var[b] = \frac{\{X_1^2 var[u_1] + X_2^2 var[u_2] + 2 X_1 X_2 cov(u_1,u_2)\}}{[\sum X_i^2]^2} $$
$$ var[b] = \frac{\sigma^2}{(\sum^2_i)^2} $$
$$ var[z+w] = var[z] + var[w] + 2cov(z,w) $$

* Normality - Plausible in certain contexts
* Delivers lots of exact results
    * normal functions are normal
    * All those f,t tests and such

New Assumption

- a') \\( X_i \\) are non stochastic i = 1,...,n
- b) \\(u_i \sim iid (0,\sigma^2) i = 1,...,n\\)
  * identically independent distributed
  * Not normal because ???
  * 0 mean: \\(E[u_i]\\), \\(var[u_i]\\)

$$ E[b] = \beta $$
$$ var[b] = \frac{\sigma^2}{\sum^n_{_{}i=1} X_i^2} $$


Lecture 3
---------

### Facts
$$ \begin{align} b &= \frac{\sum{x_i y_i}}{\sum{x_i^2}} \\\\
  &= \frac{\frac{\sum{x_iy_i}}{n}}{\frac{\sum{x_i^2}}{n}} \\\\
  &= \frac{ S_{_{}xy} }{ S^2_2 } \\\\
  &= \frac{S_xy}{S_x S_y}\frac{S_y}{S_x} \\\\
  &= r_{_{}xy} \times \frac{S_y}{S_X} \end{align} $$

$$ \sum e_i = 0 \; and \; \sum x_ie_i = 0 $$
$$ Y_i = a + b X_i + e_i $$
$$ \sum{Y_i} = na + b\sum{X_i} + \underbrace{\sum e_i}_{=0} _{} $$
$$ Y_i = a + bX_i + e_i $$
$$ \bar{Y} = a + b \bar{X} $$
$$ y_i = bx_i + e_i $$
$$ x_i y_i = b x_i^2 + x_i e_i $$
$$ \sum x_i y_i = b\sum{x_i^2} + \underbrace{x_ie_i}_{=0} _{} $$
By Definition of b

Also, from  \\(y_i = bx_i + e_i\\)
$$ \sum{y_i^2} = \sum (bx_i)^2 + \sum e_i^2 + \underbrace{2b\sum{x_ie_i}}_{=0} _{}$$
$$ R^2 = \frac{ESS}{TSS} $$
$$ TSS = ESS + RSS $$

Lecture 4
---------

$$ Y_i = \alpha + \beta X_i + u_i $$
$$ Y_i = \alpha + \beta \bar{X} + \bar{u} $$
$$ y_i = \beta x_i + u_i-\bar{u} $$
$$ y_i = Y_i - \bar{Y} $$
$$ x_i = X_i - \bar{X} $$
$$ \bar{u} = \frac{\sum u_i}{n} $$

Now
$$ \newcommand{\osxis}[1]{\frac{#1}{\sum x_i^2}} $$
$$ b = \osxis{x_iy_i} = \osxis{\beta x_i^2} = \osxis{x_i(u_i-\bar{u})} = \beta + \osxis{x_iu_i} $$
$$ \sum x_i(u_i-\bar{u}) = \sum x_iu_i-\sum \bar{u}X_i $$
$$ \sum \bar{u}x_i = \bar{u}\sum x_i \; since \; \sum x_i = 0 $$

> The weighted sum of a non normal distribution is a departure from the original distribution

\\( \beta \\) is tough

Consider assumptions

* a') X_i non stochastic
* b) E[u_i] = 0

Enough for non biased

* Pull out non random stuff, then becomes expectation of terms
$$ E[b] = \beta + E\left[\osxis{\sum x_iu_i} \right] = ... = \beta $$

* b') \\( u_i \sim iid(0,\sigma^2) \Rightarrow var[b] = \osxis{\sigma^2} \\)

$$ E[x_iu_i] = xE[u_i] = 0 $$

### Least squares estimator of \\( \alpha \\)
$$ \begin{align} 
  a &= \bar{Y} - b\bar{X} \\\\
    &= \alpha + \beta \bar{X} + \bar{u} = b\bar{X} \\\\
E[a] &=  \alpha + \beta\bar{X} + 0 - \beta \bar{X}
\end{align} $$

> Cancel thus unbiased estimator

* Two bits of the variances are alpha and ubar

> Part c of assignment - differences between the variances can be quite substatial

### Ideas
$$ Y = \alpha + \beta X_i + u_i $$
Normal
$$ var[b] = \frac{\sigma^2}{\sum x_i^2} $$
Least Squares
$$ var[b] = \frac{\sigma^2}{\sum X_i^2} $$

Small x sum is no bigger than sum of big x sq - proof
$$ \begin{align} 
\sum{x_i^2} &= \sum(X_i-\bar{X})^2 \\\\
  &= \sum{X_i^2} + n\bar{X}^2 - \underbrace{2\bar{X}\sum X_i}_{2 \bar{X}\left(\frac{\sum X_i}{n} \right)} n _{}\\\\
  &= \sum X_i^2 - n\bar{X}^2 \\\\
\end{align} $$

* Setting b means variance is 0 - stupid estimator

### Gauss Markov theorem
Assumptions
* a')
* b')

* Model with unknown intercept

> Minimum variance in the class of estimator that you're looking for...
>
> Consideration of the linear unbiased estimators ignores some good biased estimators that makes sense

Let
$$ b^x = \sum W_i Y_i $$
* Linear
* Non random

* Want unbaised \\( E[b^x] = \beta \\) - also puts restrictions on W
  * \\( W_i = 0 \\)
  * \\( \sum{W_i X_i} = 1 \\)

$$ \begin{align}
E[b^x] = E[\sum W_i Y-i] \\\\
&= E[\sum W_i (\alpha+\beta X_i + u+i)] \\\\
&= \alpha\sum W_i + \beta\sum W_i X_i + \underbrace{E(\sum W_i u_i)}_{= 0} _{}\\\\
&= beta \; always
\end{align} $$
$$ \sum W_i = 0, \sum W_iX_i = 1 $$

Next \\( var[b^x] = \sigma^2\sum W_i^2  \\)

* Covariance between the user bits are 0 because assumption


#### OLS
$$ b = \sum w_iY_i $$
$$ b = \frac{\sum{x_iy_i}}{\sum x_i^2} = \sum w_iy_i $$
$$ w_i = \frac{x_i}{\sum x_i^2} $$
$$ = \sum w_iY_i \; since \; sum w_i = 0 $$ 
$$ var[b] = \sigma^2\sigma w_i^2 $$

Compare this with \\( var[b^x] = \sigma^2\sum W_i^2 \\)
* Don't know what the W is though do know w using restrictions

> Want to: Compare this with any OTHER linear unbiased estimator 


Lecture 5
---------
* ESS = Explained Sum of Squares
* RSS = Residual Sum of Squares

* Least Squares Estimator: Equation with alpha beta for which are unknown -> Linear Line
* Best Linear Unbiased (BLU)

$$ x_i = X_i - \bar{X} $$

* If you leave a variable (alpha) out when you shouldn't, then this puts bias
* If alpha is 0 but you leave it in its inefficient

$$ \begin{align}
Y_i &= \alpha + \beta X_i + U_i \\\\
\bar{Y} &= \alpha + \beta \bar{X} + \bar{U} \\\\
y_i &= \beta X_i + u_i - \bar{u} \\\\
b &= \frac{\sum{x_i y_i}}{\sum x_i^2}
\end{align} $$

> Moving on the to next part of course

$$ Y_t = \alpha + \beta X_t + u_t $$

* Using time data

$$ X_t = g(t) $$

* e.g.
  1. i. \\( g(t) = t \\)
  2. ii. \\( g(t) = t^\rho \\) -> Rich example
  3. iii. \\( g(t) = sin( \frac{t2\pi}{k} ) \\)
* e.g. 2
  1. \\( g(t) = t^2 \\)
  2. \\( g(t) = 1/t \\) -> Rich example

* For i. \\( g(t) = t \\)
  * \\( Y_t = \alpha + \beta t u_t \\)
$$ \begin{align} 
\Delta Y_t = Y_t - Y_{t-1} &= \alpha + \beta t + u_t - (alpha + \beta(t-1) + u_{t-1}) \\\\
  &= \beta + \Delta u_t 
  \end{align} $$

$$ P_t + \alpha + \beta P_{t-1}  + u_t \; where \; u_t \sim iid(0, \sigma^2) _{} $$ 
* Lag the 10 minute variable
* \\( E[P_{t} | P_{t-1}] = \alpha + \beta P_{t-1}  + E[u_t | P_{t-1}] \\)

> Why do you take the expectation???

* Each depends on itself recursively? Dynamic program...
* \\( u_t \\) is the one that changes - independence of them is important


Lecture 6
---------

