
class Solution {
public:
  int minDeletionSize(vector<string>& strs) {
    // count no. of rows and coin.
    int rows = strs.size();
    int columns = strs[0].size();

    // stor the ans
    int ans = 0;

    // Traverse column wise and for each row.
    for(int i=0;i<columns;i++){
      for(int j=1; j<rows;j++){
        // if previous row as higher value mean not sorted hence increase the value of ans and break the inner loop for checking next column
        if (strs[j-1][i]>strs[j][i]){
          ans++;
          break;
        }
      }
    }

    return ans;
  }   
};