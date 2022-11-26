using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEditor;

public class SkinManager : MonoBehaviour
{
    public static int MALE_OFFSET = 2;
    // Start is called before the first frame update
    private Image sprite;
    public Image player;
    public List<Sprite> skins = new List<Sprite>();
    private int selectedSkin = 0;

	private void Awake()
	{
		sprite = GetComponent<Image>();
	}
	public void NextOption()
	{
        selectedSkin++;
        if (selectedSkin >= skins.Count)
            selectedSkin = 0;
        sprite.sprite = skins[selectedSkin];
	} 

    public void PrevOption()
	{
        selectedSkin--;
        if (selectedSkin <= 0)
            selectedSkin = skins.Count - 1;
        sprite.sprite = skins[selectedSkin];
	}

    public void SaveSkin()
	{
        GameObject obj;
        if (selectedSkin < MALE_OFFSET)
		{
            obj = Resources.Load("Player/Male/PlayerA_" + (selectedSkin + 1)) as GameObject;
        } else
		{
            obj = Resources.Load("Player/Female/PlayerB_" + (selectedSkin - MALE_OFFSET + 1)) as GameObject;
        }
        player.sprite = obj.GetComponent<SpriteRenderer>().sprite;
      
        PlayerPrefs.SetInt("SkinA", selectedSkin);
    }
}
