using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerManager : MonoBehaviour
{
	public GameObject playerA;
    private Vector3 playerAPosition;
	private void Awake()
	{

        // save original position
        playerAPosition = playerA.transform.position + Vector3.zero;
    }

    public void resetPlayerState()
	{
        playerA.transform.position = playerAPosition;
        playerA.GetComponent<PlayerController>().InitPlayerState();
    }
}
