char *waiting[128][5000];

int numMatchingSubseq(char *S, char **words, int wordsSize)
{
    int wn[128] = {};
    while (wordsSize--)
    {
        char *word = *words++;
        waiting[*word][wn[*word]++] = word + 1;
    }
    while (*S)
    {
        char c = *S++;
        int n = wn[c];
        wn[c] = 0;
        for (int i = 0; i < n; i++)
        {
            char *it = waiting[c][i];
            waiting[*it][wn[*it]++] = it + 1;
        }
    }
    return wn[0];
}