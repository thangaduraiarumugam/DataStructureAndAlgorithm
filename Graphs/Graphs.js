const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];
const bfsAdjList = (arr) => {
  let seen = {};
  let queues = [0];
  let values = [];

  while (queues.length) {
    let currentNode = queues.shift();
    values.push(currentNode);
    seen[currentNode] = true;

    let adjacent = arr[currentNode];
    for (let i = 0; i < adjacent.length; i++) {
      if (!seen[adjacent[i]]) {
        queues.push(adjacent[i]);
      }
    }
  }
  return values;
};
//console.log(bfsAdjList(adjacencyList));

const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
];

const bfsAdjMatrix = (arr) => {
  let queues = [0];
  let seen = {};
  let values = [];

  while (queues.length) {
    let currentNode = queues.shift();
    values.push(currentNode);
    seen[currentNode] = true;

    let adj = arr[currentNode];

    for (let i = 0; i < adj.length; i++) {
      if (adj[i] > 0 && !seen[i]) {
        queues.push(i);
      }
    }
  }
  return values;
};

//console.log(bfsAdjMatrix(adjacencyMatrix));

//Time Needed to Inform All Employees
const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

const numOfMinutes = function (n, headID, managers, informTime) {
  const adjList = managers.map(() => []);

  for (let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if (manager === -1) continue;

    adjList[manager].push(employee);
  }

  return dfs(headID, adjList, informTime);
};

const dfs = function (currentId, adjList, informTime) {
  if (adjList[currentId].length === 0) {
    return 0;
  }

  let max = 0;
  const subordinates = adjList[currentId];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }

  return max + informTime[currentId];
};

//console.log(numOfMinutes(8, 4, managersArray, informTimeArray));

//Course Schedule Leet code question best explanation
//https://www.youtube.com/watch?v=EgI5nU9etnU

const isCyclic = (adjList, visited, idx) => {
  if (visited[idx] === 2) return true;

  visited[idx] = 2;
  let currentNode = adjList.get(idx) || [];
  for(let n of currentNode) {
    if (visited[n] != 1) {
      if (isCyclic(adjList, visited, n)) return true;
    }
  }
  visited[idx] = 1;
  return false;
};

let courseSchedule = (numberOfCourses, preRequist) => {
  //numCourses = 2, prerequisites = [[1,0],[1,2]]
  //unvisited - 0
  //processed - 1
  //processing- 2

  let adjList = new Map();
  let visited = new Array(numberOfCourses).fill(0);
  for (let [course, dependency] of preRequist) {
        adjList.set(course, (adjList.get(course) || new Set()).add(dependency));
  }
  for (let i = 0; i < numberOfCourses; i++) {
    
    if (visited[i] === 0) {
      if (isCyclic(adjList, visited, i)) {
            return false;
      }
    }
    return true;
  }
};

console.log(
  courseSchedule(5, [
    [0, 1],[0,2],[0,3],[1,4],[4,1]
  ])
);
