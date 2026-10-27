---
title: BUPT 国际学院数据结构练习题库
layout: doc
sidebar: true
outline: true
---

<div class="home-hero" id="home">
  <div class="home-eyebrow">BUPT INTERNATIONAL SCHOOL · DATA STRUCTURES</div>
  <h1>数据结构 · 练习题库</h1>
  <p class="home-subtitle">BUPT 国际学院 数据结构 练习题整理<br>线性结构 · 树 · 图 · 排序 · 散列 · KMP</p>
  <div class="home-actions">
    <a class="action-primary" href="#linear">开始学习 ↓</a>
    <a href="https://pintia.cn/" target="_blank" rel="noopener noreferrer">PTA 练习平台 ↗</a>
    <a href="https://github.com/leshanlaoying" target="_blank" rel="noopener noreferrer">我的 GitHub ↗</a>
    <a class="action-pink" href="https://xhslink.cn/o/2hqnD4Jm8ue/" target="_blank" rel="noopener noreferrer">我的小红书 ↗</a>
  </div>
</div>

<div class="info-panel" id="updates">
  <strong>📅 最新更新时间</strong>
  <p>2026 年 10 月 27 日  （目前更新到2.2题，后面均为示例题目）</p>
</div>

<div class="info-panel" id="about">
  <strong>👋 关于作者</strong>
  <p>HELLO 我是【流水落花春去也】</p>
  <p>欢迎来到 BUPT 国际学院数据结构练习题库！这里按照课程知识点整理练习题，方便查阅与复习。</p>
  <p>如果阅读过程中发现任何错误，或对解题思路有任何疑问，欢迎通过邮件与我联系。我的邮箱是：chenshufan@bupt.edu.cn</p>
</div>

## 01 · 线性结构 {#linear}

<span class="chapter-pill">LINEAR STRUCTURES</span>


### 1.1 Balancing Symbols {#linear-1}

<div class="problem-tag">练习题 · 线性结构 · 栈</div>

**题目描述**

Balancing symbols: Check if parenthesis `()`, brackets `[]`, and braces `{}` are balanced.

**输入格式**

1 line

An expression includes variables and symbols. The max length is 50.

**输出格式**

1 line

If all the `()` `[]` `{}` are balanced, then output `0`.

If `()` are not balanced, output `1`; If `[]` not balanced, output `2`; If `{}` not balanced, output `3`.

If more than one symbol are not balanced, output corresponding numbers, sort them in ascending order and divide them by comma.

**输入样例**

```text
{a*(b-c)-x/2]
```

**输出样例**

```text
2,3,
```
**思路分析**

括号匹配问题自动想到栈，但题目比较简单，不用写栈的代码

用个`cnt`计数器就行，判断`cnt`会不会小于`0`


**题解代码（C语言）**

```c:line-numbers
#include <stdio.h>
int main(){
	char s[60];
	scanf("%s",s);
	int cnt1=0,cnt2=0,cnt3=0;
	int flag1=0,flag2=0,flag3=0;
	int i;
	for (i=0;s[i]!='\0';i++){
		if (s[i]=='('){
			cnt1++;
		}else if (s[i]==')'){
			cnt1--;
			if (cnt1<0){
				flag1=1;
			}
		}else if (s[i]=='['){
			cnt2++;
		}else if (s[i]==']'){
			cnt2--;
			if (cnt2<0){
				flag2=1;
			}
		}else if (s[i]=='{'){
			cnt3++;
		}else if (s[i]=='}'){
			cnt3--;
			if (cnt3<0){
				flag3=1;
			}
		}
	}
	if (cnt1!=0){
		flag1=1;
	}
	if (cnt2!=0){
		flag2=1;
	}
	if (cnt3!=0){
		flag3=1;
	}
	if (flag1==1){
		printf("1,");
	}
	if (flag2==1){
		printf("2,");
	}
	if (flag3==1){
		printf("3,");
	}
	if (flag1==0&&flag2==0&&flag3==0){
		printf("0");
	}
} 
```

---


### 1.2 Infix to Postfix Conversion {#linear-2}

<div class="problem-tag">练习题 · 线性结构 · 栈</div>

**题目描述**

Convert the infix expression to postfix expression.

**输入格式**

1 line.

A correct expression includes `+`, `-`, `*`, `/`, `(`, `)` and integers. Each integer is less than 10 and more than 0.

**输出格式**

2 lines.

The first line gives the result of expression. Keep 2 digits after the decimal point.

The second line gives the postfix expression. Use a blank space to divide every number and symbol. There is a blank space at the end of the line.

**输入样例**

```text
2*(3+4)/5
```

**输出样例**

```text
2.80
2 3 4 + * 5 / 
```

**思路分析**

用栈来实现，主要是入栈出栈规则：数字直接输出，左括号直接入栈，右括号使运算符依次出栈直到左括号（丢弃括号）；普通运算符入栈前，先弹出栈顶优先级大于或等于自己的运算符，最后将剩余运算符全部出栈。

要写一个`prior`函数判断优先级

**题解代码（C语言）**

```c:line-numbers
#include <stdio.h>
char stack[10000];
int top=0;
void push(char c){
	stack[top++]=c;
}
char pop(){
	return stack[--top];
}
char stacktop(){
	return stack[top-1];
}
int isempty(){
	if (top>0){
		return 0;
	}else{
		return 1;
	}
}
double mystack[10000];
int top1=0;
void push1(double x){
	mystack[top1++]=x;
}
double pop1(){
	return mystack[--top1];
}
double mystacktop(){
	return mystack[top1-1];
}
int prior(char c){
	if (c=='('){
		return 0;
	}else if (c=='+'||c=='-'){
		return 1;
	}else if (c=='*'||c=='/'){
		return 2;
	}
}
int main(){
	char s[10000];
	scanf("%s",s);
	char a[10000];
	int p=0;
	int i,flag=0;
	for (i=0;s[i]!='\0';i++){
		if (s[i]>'0'&&s[i]<='9'){
			a[p++]=s[i];
		}else if (s[i]=='('){
			push(s[i]);
		}else if (s[i]==')'){
			char ch=pop();
			while (ch!='('){
				a[p++]=ch;
				ch=pop();
			}
		}else {
			while (isempty()!=1&&stacktop()!='('&&prior(stacktop())>=prior(s[i])){
				char ch=pop();

				a[p++]=ch;
			}
			push(s[i]);
		}
	}
	while (isempty()!=1){
		char ch=pop();
		a[p++]=ch;
	}
	a[p]='\0';
	for (i=0;a[i]!='\0';i++){
		if (a[i]>='1'&&a[i]<='9'){
			push1(a[i]-'0');
		}else if (a[i]=='+'){
			double t1=pop1();
			double t2=pop1();
			push1(t1+t2);
		}else if (a[i]=='-'){
			double t1=pop1();
			double t2=pop1();
			push1(t2-t1);
		}else if (a[i]=='*'){
			double t1=pop1();
			double t2=pop1();
			push1(t1*t2);
		}else if (a[i]=='/'){
			double t1=pop1();
			double t2=pop1();
			push1(1.0*t2/t1);
		}
//		printf("%.2f\n",mystacktop());
	}
	printf("%.2f\n",mystacktop());
	for (i=0;a[i]!='\0';i++){
		if (i==0){
			printf("%c",a[i]);
		}else {
			printf(" %c",a[i]);
		}
	}
	printf("\n");
}
```

---



### 1.3 Central List {#linear-3}

<div class="problem-tag">练习题 · 线性结构 · 数组</div>

**题目描述**

If a list is central symmetry, it is called a central list. For example, `1->3->5->7->9->7->5->3->1` is a central list.

Give you a sequence of numbers, form a link list and then judge whether it is a central list.

**输入格式**

A sequence of numbers separated by comma.

**输出格式**

If it is a central list, output `Yes`, otherwise `No`.

**输入样例**

```text
1,3,5,7,9,7,5,3,1,
```

**输出样例**

```text
Yes
```

**思路分析**

直接判断回文就行，直接用数组

**题解代码（C语言）**

```c:line-numbers
#include <stdio.h>
int main(){
    int a[1000];
    int cnt=0;
    int x;
    while (scanf("%d",&x)!=EOF){
        a[cnt++]=x;
        getchar();
    }
    int i,flag=0;
    for (i=0;i<cnt;i++){
        if (a[i]!=a[cnt-1-i]){
            flag=1;
            break;
        }
    }
    if (flag==0){
        printf("Yes\n");
    }else if (flag==1){
        printf("No\n");
    }
}
```

---


### 1.4 Who Is the Last? {#linear-4}

<div class="problem-tag">练习题 · 线性结构 · 队列</div>

**题目描述**

There are N people, numbered from 1 to N, sitting around in a circle. Counted from the NO.1, the M th people should leave the game. Then, from the next one, the counting loop will go on. After several loops, there will be only one guy left.

Writing a program to calculate who is the last people.

**输入格式**

Two integers, separated by commas. The first integer represents N individuals (`0 < N`), the second integer represents M (`0 < M <= N`).

**输出格式**

N integers, separated by commas. These numbers indicate the order of the person to leave the circle, with their numbers.

**输入样例**

```text
5,1
```

**输出样例**

```text
2,4,1,5,3
```

**思路分析**

经典的约瑟夫问题，手写一个队列模拟

报数就先出队，若是倍数就输出，否则再队尾入队

**题解代码（C语言）**

```c:line-numbers
#include <stdio.h>
int q[1000];
int front=0,rear=-1;
void push(int x){
    q[++rear]=x;
}
int pop(){
    return q[front++];
}
int isempty(){
    if (rear>=front){
        return 0;
    }else {
        return 1;
    }
}
int main(){
    int n,m,i;
    scanf("%d",&n);
    getchar();
    scanf("%d",&m);
    int cnt=0;
    for (i=1;i<=n;i++){
        push(i);
    }
    int flag=0;
    while (isempty()!=1){
        cnt++;
        if (cnt%(m+1)!=0){
            int t=pop();
            push(t);
        }else if (cnt%(m+1)==0){
            int t=pop();
            if (flag==0){
                printf("%d",t);
                flag++;
            }else {
                printf(",%d",t);
            }
        }
    }
    printf("\n");
}
```

---


## 02 · 树 {#tree}

<span class="chapter-pill">TREES</span>


### 2.1 树的遍历 {#tree-1}

<div class="problem-tag">练习题 · 树 · 二叉树</div>

**题目描述**

给定一棵二叉树的后序遍历和中序遍历，请你输出其层序遍历的序列。这里假设键值都是互不相等的正整数。

**输入格式**

输入第一行给出一个正整数 `N`（≤30），是二叉树中结点的个数。

第二行给出其后序遍历序列。

第三行给出其中序遍历序列。

数字间以空格分隔。

**输出格式**

在一行中输出该树的层序遍历的序列。数字间以 1 个空格分隔，行首尾不得有多余空格。

**输入样例**

```text
7
2 3 1 5 7 6 4
1 2 3 4 5 6 7
```

**输出样例**

```text
4 1 6 3 5 7 2
```

**思路分析**

拿着后序中最后一个数到中序中找，这是根节点，左右分别是两棵字树

类似递归的找，`find`函数传入后序、中序两端端点

因为要层序遍历，用队列实现


**题解代码（C语言）**

```c:line-numbers
#include <stdio.h>
int post[40]={0};
int in[40]={0};
int n;
struct node {
    int l1,r1,l2,r2;
};
struct node q[1000];
int rear=-1,front=0;
int find(int post_l,int post_r,int in_l,int in_r){
    int i,index;
    for (i=in_l;i<=in_r;i++){
        if (in[i]==post[post_r]){
            index=i;
            break;
        }
    }
    return index;
}
int main(){
    scanf("%d",&n);
    int i;
    for (i=1;i<=n;i++){
        scanf("%d",&post[i]);
    }
    for (i=1;i<=n;i++){
        scanf("%d",&in[i]);
    }
    q[++rear]=(struct node){1,n,1,n};
    int flag=0;
    while (rear>=front){
        struct node u=q[front++];
        if (u.l1>u.r1||u.l2>u.r2){
            continue;
        }
        if (flag==0){
            printf("%d",post[u.r1]);
            flag++;
        }else {
            printf(" %d",post[u.r1]);
        }
        int index=find(u.l1,u.r1,u.l2,u.r2);
        q[++rear]=(struct node){u.l1,u.l1+index-u.l2-1,u.l2,index-1};
        q[++rear]=(struct node){u.l1+index-u.l2,u.r1-1,index+1,u.r2};
    }
}
```

---


### 2.2 交换二叉树中每个结点的左孩子和右孩子 {#tree-2}

<div class="problem-tag">练习题 · 树 · 二叉树</div>

**题目描述**

以二叉链表作为二叉树的存储结构，交换二叉树中每个结点的左孩子和右孩子。

**输入格式**

输入二叉树的先序序列。

提示：一棵二叉树的先序序列是一个字符串，若字符是 `#`，表示该二叉树是空树，否则该字符是相应结点的数据元素。

**输出格式**

输出有两行：

第一行是原二叉树的中序遍历序列；

第二行是交换后的二叉树的中序遍历序列。

**输入样例**

```text
ABC##DE#G##F###
```

**输出样例**

```text
CBEGDFA
AFDGEBC
```

**思路分析**

给二叉树的先序序列，所以递归地建树（因为要修改，要传一个二级指针）

再写一个中序遍历的函数

交换左右子树，也是递归地交换


**题解代码（C语言）**

```c:line-numbers
#include <stdio.h>
#include <stdlib.h>
struct node {
    char data;
    struct node *l,*r;
};
void createbitree(struct node **t){
    char ch;
    scanf(" %c",&ch);
    if (ch=='#'){
        *t=NULL;
    }else {
        *t=(struct node *)malloc(sizeof(struct node));
        (*t)->data=ch;
        createbitree(&(*t)->l);
        createbitree(&(*t)->r);
    }
}
void inorder(struct node *t){
    if (t){
        inorder(t->l);
        printf("%c",t->data);
        inorder(t->r);
    }
}
void exchange(struct node *t){
    if (t){
        struct node *tmp=t->l;
        t->l=t->r;
        t->r=tmp;
        exchange(t->l);
        exchange(t->r);
    }
}
int main(){
    struct node *root;
    createbitree(&root);
    inorder(root);
    printf("\n");
    exchange(root);
    inorder(root);
}
```

---



## 03 · 图 {#graph}

<span class="chapter-pill">GRAPHS</span>

### 3.1 无向图的度 {#graph-1}

<div class="problem-tag">练习题 · 图</div>

**题目描述**

给定无向图中的边，统计编号为 `v` 的顶点的度数。

**输入格式**

第一行输入 `n m v`，接下来 `m` 行各输入一条边的两个端点。

**输出格式**

输出顶点 `v` 的度数。

**输入样例**

```text
4 3 1
1 2
1 3
2 4
```

**输出样例**

```text
2
```

---

### 3.2 连通分量数 {#graph-2}

<div class="problem-tag">练习题 · 图</div>

**题目描述**

给定一个无向图，计算连通分量的个数。

**输入格式**

第一行输入 `n m`，接下来 `m` 行输入边的两个端点，顶点编号为 1 到 `n`。

**输出格式**

输出连通分量的数量。

**输入样例**

```text
5 2
1 2
4 5
```

**输出样例**

```text
3
```

---

## 04 · 排序 {#sort}

<span class="chapter-pill">SORTING</span>

### 4.1 升序排序 {#sort-1}

<div class="problem-tag">练习题 · 排序</div>

**题目描述**

给定 `n` 个整数，将它们按从小到大的顺序输出。

**输入格式**

第一行输入 `n`，第二行输入 `n` 个整数。

**输出格式**

输出排序后的整数，以空格分隔。

**输入样例**

```text
5
9 1 4 2 8
```

**输出样例**

```text
1 2 4 8 9
```

---

### 4.2 第 K 小的数 {#sort-2}

<div class="problem-tag">练习题 · 排序</div>

**题目描述**

给定 `n` 个整数和整数 `k`，求按升序排列后第 `k` 个数（`k` 从 1 开始）。

**输入格式**

第一行输入 `n k`，第二行输入 `n` 个整数。

**输出格式**

输出第 `k` 小的数。

**输入样例**

```text
5 3
9 1 4 2 8
```

**输出样例**

```text
4
```

---

## 05 · 散列 {#hash}

<span class="chapter-pill">HASHING</span>

### 5.1 不同整数的个数 {#hash-1}

<div class="problem-tag">练习题 · 散列</div>

**题目描述**

给定一个整数序列，统计其中不同整数的数量。

**输入格式**

第一行输入 `n`，第二行输入 `n` 个整数。

**输出格式**

输出不同整数的数量。

**输入样例**

```text
6
2 3 2 5 3 7
```

**输出样例**

```text
4
```

---

### 5.2 两数之和 {#hash-2}

<div class="problem-tag">练习题 · 散列</div>

**题目描述**

给定 `n` 个整数和目标数 `t`，判断能否找到两个不同位置的元素，使它们的和为 `t`。

**输入格式**

第一行输入 `n t`，第二行输入 `n` 个整数。

**输出格式**

若存在这样的两个元素，输出 `Yes`；否则输出 `No`。

**输入样例**

```text
5 9
2 4 7 1 8
```

**输出样例**

```text
Yes
```

---

## 06 · KMP {#kmp}

<span class="chapter-pill">STRING MATCHING</span>

### 6.1 字符串首次匹配 {#kmp-1}

<div class="problem-tag">练习题 · KMP</div>

**题目描述**

给定文本串 `S` 和模式串 `P`，输出 `P` 在 `S` 中第一次出现的位置（从 0 开始）。

**输入格式**

第一行输入 `S`，第二行输入 `P`，均不含空格。

**输出格式**

输出首次匹配位置；若不存在输出 `-1`。

**输入样例**

```text
ababcabc
abc
```

**输出样例**

```text
2
```

---

### 6.2 字符串匹配次数 {#kmp-2}

<div class="problem-tag">练习题 · KMP</div>

**题目描述**

给定文本串 `S` 和模式串 `P`，统计 `P` 在 `S` 中出现的次数，允许重叠。

**输入格式**

第一行输入 `S`，第二行输入 `P`，均不含空格。

**输出格式**

输出匹配次数。

**输入样例**

```text
aaaaa
aa
```

**输出样例**

```text
4
```

---

