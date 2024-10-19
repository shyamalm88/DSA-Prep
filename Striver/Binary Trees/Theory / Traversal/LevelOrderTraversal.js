function levelOrder(root) {
  let ans = [];
  let q = [];

  if (!root) return ans;

  q.push(root);

  while (q.length) {
    let level = [];

    let size = q.length;

    for (let i = 0; i < size; i++) {
      let node = q.shift();
      level.push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    ans.push(level);
  }
  return ans;
}
