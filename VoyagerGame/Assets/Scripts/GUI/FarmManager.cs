using UnityEngine;
using UnityEngine.SceneManagement;

public class FarmManager : MonoBehaviour
{
    public GameObject mazeMenu;
    
	public void OpenMazeMenu()
	{
		mazeMenu.SetActive(true);
	}
	public void ConfirmEnterMaze()
	{
		CloseEnterMaze();
		SceneManager.LoadScene("StartMenu");
	}

    public void CloseEnterMaze()
	{
		mazeMenu.SetActive(false);
	}
}
