package controller;
import java.util.ArrayList;

import model.Item;

public class ControleItem {
	public ArrayList<Item> itensCadastrados = new ArrayList<Item>();
	
	public ControleItem() {
		this.itensCadastrados.add(new Item("Notebook", "321654", "20210497","Seplag", "TI"));
		this.itensCadastrados.add(new Item("Notebook", "321654", "20210497","Seplag", "TI"));
		this.itensCadastrados.add(new Item("Notebook", "321654", "20210497","Seplag", "TI"));
	}
	
	public void cadastrarItem(String descricao, String numserie,String patrimonio, String secretaria, String setor) {
		Item novoItem = new Item(descricao, numserie, patrimonio, secretaria, setor);
		itensCadastrados.add(novoItem);
	}
}