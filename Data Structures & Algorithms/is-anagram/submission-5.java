class Solution {
    public boolean isAnagram(String s, String t) {

        HashMap<Character, Integer> mapOne = new HashMap<>(); // s
        HashMap<Character, Integer> mapTwo = new HashMap<>(); // t
        char keyOne = 0;
        char keyTwo = 0;

        for (int i = 0; i < s.length(); i++) {
            keyOne = s.charAt(i);
            mapOne.put(keyOne, mapOne.getOrDefault(keyOne, 0) + 1);
        }
        for (int i = 0; i < t.length(); i++) {
            keyTwo = t.charAt(i);
            mapTwo.put(keyTwo, mapTwo.getOrDefault(keyTwo, 0) + 1);
        }

      return mapOne.equals(mapTwo);
    }
}
