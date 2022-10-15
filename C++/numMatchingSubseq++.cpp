class Solution(object):
    def numMatchingSubseq(self, S, words):
        waiting = collections.defaultdict(list, {' ': map(iter, words)})
        for c in ' ' + S:
            for it in waiting.pop(c, ()):
                waiting[next(it, None)].append(it)
        return len(waiting[None])
